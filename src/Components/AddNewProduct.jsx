// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./sidebar.css";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../hooks/auth";
// import { WithContext as ReactTags } from "react-tag-input";
// import { storage } from "../Config/Firbase";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import ScrapForm from "./ScrapForm";

// export default function AddNewProduct({ close, product }) {
//   const user = auth();
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedSubCategory, setSelectedSubCategory] = useState("");
//   const [subCategories, setSubCategories] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [updatedData, setUpdatedData] = useState(null);

//   const initialFormData = {
//     name: "",
//     description: "",
//     price: 0,
//     categories: [{ category: "", subcategory: "" }],
//     stockQuantity: 0,
//     imageURL: [],
//     brand: "",
//     weight: "",
//     dimensions: {
//       length: 0,
//       width: 0,
//       height: 0,
//     },
//     color: "",
//     material: "",
//     keywords: [],
//     rating: 0,
//     discounts: "",
//     availabilityStatus: "available",
//     vendorId: user._id,
//   };
//   const [scrapFormData, setScrapFormData] = useState({
//     material: "",
//     density: "",
//     flexibility: "",
//     durability: "",
//     melting_point: "",
//     recyclability: "",
//   });

//   const [formData, setFormData] = useState(initialFormData);


//   // Handler for scrap-specific form changes
//   const handleScrapFormChange = (e) => {
//     const { name, value } = e.target;
//     setScrapFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     if (product) {
//       setFormData({
//         ...product,
//         categories: [
//           {
//             category: product.categories[0]?.category || "",
//             subcategory: product.categories[0]?.subcategory || "",
//           },
//         ],
//         keywords: product.keywords || [],
//       });
//       setSelectedCategory(product.categories[0]?.category || "");
//       setSelectedSubCategory(product.categories[0]?.subcategory || "");
//       setTags(
//         product.keywords.map((keyword) => ({ id: keyword, text: keyword }))
//       );
//     } else {
//       setFormData(initialFormData);
//       setSelectedCategory("");
//       setSelectedSubCategory("");
//       setTags([]);
//     }
//   }, [product]);

//   const handleDelete = (i) => {
//     const updatedTags = tags.filter((_, index) => index !== i);
//     setTags(updatedTags);

//     const updatedKeywords = formData.keywords.filter((_, index) => index !== i);
//     setFormData({ ...formData, keywords: updatedKeywords });
//   };

//   const handleDrag = () => {};

//   const handleAddition = (tag) => {
//     setTags([...tags, tag]);
//     setFormData({ ...formData, keywords: [...formData.keywords, tag.text] });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);

//     let subCategoryOptions = [];
//     if (category === "physicalProduct") {
//       subCategoryOptions = [
//         "Home Appliances",
//         "Electronics",
//         "Furniture",
//         "Clothing",
//         "Footwear",
//         "Kitchenware",
//         "Toys",
//         "Sports Equipment",
//         "Books",
//         "Stationery",
//         "Beauty Products",
//         "Jewelry",
//         "Gardening Tools",
//         "Automobile Parts",
//         "Pet Supplies",
//       ];
//     } else if (category === "digitalAsset") {
//       subCategoryOptions = [
//         "Assignments",
//         "Projects",
//         "E-books",
//         "Software",
//         "Music",
//         "Videos",
//         "Courses",
//         "Templates",
//         "Fonts",
//         "Graphics",
//         "Photography",
//         "Virtual Reality",
//         "Websites",
//         "Mobile Apps",
//         "Games",
//       ];
//     } else if (category === "scrap") {
//       subCategoryOptions = [
//         "Wall Hangings",
//         "Decoration Pieces",
//         "Metal Scraps",
//         "Wood Scraps",
//         "Plastic Scraps",
//         "Paper Scraps",
//         "Fabric Scraps",
//         "Glass Scraps",
//         "E-waste",
//         "Batteries",
//         "Old Furniture",
//         "Used Appliances",
//         "Tires",
//         "Clothing Scraps",
//         "Miscellaneous",
//       ];
//     }
//     setSubCategories(subCategoryOptions);
//     setSelectedSubCategory(""); // Reset sub-category
//     setFormData({ ...formData, categories: [{ category, subcategory: "" }] });
//   };

//   const handleSubCategoryChange = (e) => {
//     const subcategory = e.target.value;
//     setSelectedSubCategory(subcategory);
//     setFormData({
//       ...formData,
//       categories: [{ category: selectedCategory, subcategory }],
//     });
//   };

//   const handleImageUpload = async (files) => {
//     const uploadedImages = [];
//     for (const file of files) {
//       const storageRef = ref(storage, `images/${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       await new Promise((resolve, reject) => {
//         uploadTask.on(
//           "state_changed",
//           (snapshot) => {
//             // Handle progress updates if needed
//           },
//           (error) => {
//             console.error("Error uploading image:", error);
//             reject(error);
//           },
//           async () => {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//             uploadedImages.push(downloadURL);
//             resolve();
//           }
//         );
//       });
//     }
//     return uploadedImages;
//   };

//   const handleFileChange = async (e) => {
//     const files = Array.from(e.target.files);
//     try {
//       const uploadedImages = await handleImageUpload(files);
//       setFormData({
//         ...formData,
//         imageURL: [...formData.imageURL, ...uploadedImages],
//       });
//     } catch (error) {
//       console.error("Error uploading images:", error);
//     }
//   };

//   const handleDeleteImage = (url) => {
//     const updatedImages = formData.imageURL.filter((image) => image !== url);
//     setFormData({ ...formData, imageURL: updatedImages });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (product) {
//       try {
//         const response = await axios.patch(
//           `http://localhost:3002/products/${product._id}`,
//           formData,
//           {
//             headers: { Authorization: `Bearer ${user.token}` },
//           }
//         );
//         // setUpdatedData(response.data);
//         // saveScrapData();
//       } catch (error) {
//         console.error("Error saving product:", error);
//       }
//     } else {
//       try {
//         const response = await axios.post(
//           "http://localhost:3002/products",
//           formData,
//           {
//             headers: { Authorization: `Bearer ${user.token}` },
//           }
//         );
//         // setUpdatedProduct("saved product: ", response.data.product);
//         console.log("Saved Product: ", response.data.product);
//         setUpdatedData(response?.data?.product);
//         // saveScrapData();
//       } catch (error) {
//         console.error("Error saving product:", error);
//       }
//     }
//     console.log(updatedData);
//     close();
//   };

//   const saveScrapData = async () => {
//     console.log(product);
//     const scrapData = {
//       scrapFormData,
//       productID: product ? product?._id : updatedData?._id,
//     };
//     console.log("ScrapDAta: ", scrapData);
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/scrap-data`,
//         scrapData,
//         {
//           headers: { Authorization: `Bearer ${user.token}` },
//         }
//       );
//       // Handle successful response
//       if (response.status === 200) {
//         console.log("Scrap data saved successfully!");
//       }
//     } catch (error) {
//       // Handle error
//       if (error.response) {
//         // Server-side error
//         console.log(
//           `Error: ${error.response.data.error || "An error occurred"}`
//         );
//       } else if (error.request) {
//         // No response from server
//         console.log("Error: No response from server");
//       } else {
//         // Request setup error
//         console.log(`Error: ${error.message}`);
//       }
//     }
//   };

//   return (
//     <div className="container mt-3">
//       <form>
//         <div className="row g-3">
//           <div className="col-sm-6">
//             <div className="mb-3">
//               <h2 className="mb-4">
//                 {product ? "Edit Product" : "Add New Product"}
//               </h2>
//               <label htmlFor="name" className="form-label">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="form-control"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="price" className="form-label">
//                 Price:
//               </label>
//               <input
//                 type="number"
//                 id="price"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="stockQuantity" className="form-label">
//                 Stock Quantity:
//               </label>
//               <input
//                 type="number"
//                 id="stockQuantity"
//                 name="stockQuantity"
//                 value={formData.stockQuantity}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="form-control"
//             rows="3"
//             required
//           ></textarea>
//         </div>

//         <div className="row g-3">
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="category" className="form-label">
//                 Category:
//               </label>
//               <select
//                 id="category"
//                 name="category"
//                 value={selectedCategory}
//                 onChange={handleCategoryChange}
//                 className="form-select"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="physicalProduct">Physical Product</option>
//                 <option value="digitalAsset">Digital Asset</option>
//                 <option value="scrap">Scrap</option>
//               </select>
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="subcategory" className="form-label">
//                 Sub-Category:
//               </label>
//               <select
//                 id="subcategory"
//                 name="subcategory"
//                 value={selectedSubCategory}
//                 onChange={handleSubCategoryChange}
//                 className="form-select"
//                 required
//               >
//                 <option value="">Select Sub-Category</option>
//                 {subCategories.map((subCategory) => (
//                   <option key={subCategory} value={subCategory}>
//                     {subCategory}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {selectedCategory === "scrap" && (
//           <ScrapForm
//             scrapFormData={scrapFormData}
//             handleScrapFormChange={handleScrapFormChange}
//           />
//         )}

//         <div className="mb-3">
//           <label htmlFor="brand" className="form-label">
//             Brand:
//           </label>
//           <input
//             type="text"
//             id="brand"
//             name="brand"
//             value={formData.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>

//         <div className="row g-3">
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="length" className="form-label">
//                 Length:
//               </label>
//               <input
//                 type="number"
//                 id="length"
//                 name="dimensions.length"
//                 value={formData.dimensions.length}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 step="0.01"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="width" className="form-label">
//                 Width:
//               </label>
//               <input
//                 type="number"
//                 id="width"
//                 name="dimensions.width"
//                 value={formData.dimensions.width}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 step="0.01"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="height" className="form-label">
//                 Height:
//               </label>
//               <input
//                 type="number"
//                 id="height"
//                 name="dimensions.height"
//                 value={formData.dimensions.height}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 step="0.01"
//                 required
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="mb-3">
//               <label htmlFor="weight" className="form-label">
//                 Weight:
//               </label>
//               <input
//                 type="number"
//                 id="weight"
//                 name="weight"
//                 value={formData.weight}
//                 onChange={handleChange}
//                 className="form-control"
//                 min="0"
//                 step="0.01"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Image:
//           </label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             // onChange={handleImageChange}
//             className="form-control"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="tags" className="form-label">
//             Tags:
//           </label>
//           <ReactTags
//             tags={tags}
//             // suggestions={suggestions}
//             handleDelete={handleDelete}
//             handleAddition={handleAddition}
//             handleDrag={handleDrag}
//             placeholder="Add a tag"
//             classNames={{
//               tags: "ReactTags__tags",
//               tag: "ReactTags__tag",
//               remove: "ReactTags__remove",
//             }}
//           />
//         </div>

//         <div className="text-center mt-4">
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={handleSubmit}
//           >
//             {product ? "Update Product" : "Add Product"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../hooks/auth";
import { WithContext as ReactTags } from "react-tag-input";
import { storage } from "../Config/Firbase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ScrapForm from "./ScrapForm";

export default function AddNewProduct({ close, product }) {
  const user = auth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [updatedData, setUpdatedData] = useState(null);

  const initialFormData = {
    name: "",
    description: "",
    price: 0,
    categories: [{ category: "", subcategory: "" }],
    stockQuantity: 0,
    imageURL: [],
    brand: "",
    weight: "",
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
    },
    color: "",
    material: "",
    keywords: [],
    rating: 0,
    discounts: "",
    availabilityStatus: "available",
    vendorId: user._id,
  };
  const [scrapFormData, setScrapFormData] = useState({
    material: "",
    density: "",
    flexibility: "",
    durability: "",
    melting_point: "",
    recyclability: "",
  });

  const [formData, setFormData] = useState(initialFormData);

  // Handler for scrap-specific form changes
  const handleScrapFormChange = (e) => {
    const { name, value } = e.target;
    setScrapFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        categories: [
          {
            category: product.categories[0]?.category || "",
            subcategory: product.categories[0]?.subcategory || "",
          },
        ],
        keywords: product.keywords || [],
      });
      setSelectedCategory(product.categories[0]?.category || "");
      setSelectedSubCategory(product.categories[0]?.subcategory || "");
      setTags(
        product.keywords.map((keyword) => ({ id: keyword, text: keyword }))
      );
    } else {
      setFormData(initialFormData);
      setSelectedCategory("");
      setSelectedSubCategory("");
      setTags([]);
    }
  }, [product]);

  const handleDelete = (i) => {
    const updatedTags = tags.filter((_, index) => index !== i);
    setTags(updatedTags);

    const updatedKeywords = formData.keywords.filter((_, index) => index !== i);
    setFormData({ ...formData, keywords: updatedKeywords });
  };

  const handleDrag = () => {};

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
    setFormData({ ...formData, keywords: [...formData.keywords, tag.text] });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('dimensions.')) {
      setFormData({
        ...formData,
        dimensions: {
          ...formData.dimensions,
          [name.split('.')[1]]: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    let subCategoryOptions = [];
    if (category === "physicalProduct") {
      subCategoryOptions = [
        "Home Appliances",
        "Electronics",
        "Furniture",
        "Clothing",
        "Footwear",
        "Kitchenware",
        "Toys",
        "Sports Equipment",
        "Books",
        "Stationery",
        "Beauty Products",
        "Jewelry",
        "Gardening Tools",
        "Automobile Parts",
        "Pet Supplies",
      ];
    } else if (category === "digitalAsset") {
      subCategoryOptions = [
        "Assignments",
        "Projects",
        "E-books",
        "Software",
        "Music",
        "Videos",
        "Courses",
        "Templates",
        "Fonts",
        "Graphics",
        "Photography",
        "Virtual Reality",
        "Websites",
        "Mobile Apps",
        "Games",
      ];
    } else if (category === "scrap") {
      subCategoryOptions = [
        "Wall Hangings",
        "Decoration Pieces",
        "Metal Scraps",
        "Wood Scraps",
        "Plastic Scraps",
        "Paper Scraps",
        "Fabric Scraps",
        "Glass Scraps",
        "E-waste",
        "Batteries",
        "Old Furniture",
        "Used Appliances",
        "Tires",
        "Clothing Scraps",
        "Miscellaneous",
      ];
    }
    setSubCategories(subCategoryOptions);
    setSelectedSubCategory(""); // Reset sub-category
    setFormData({ ...formData, categories: [{ category, subcategory: "" }] });
  };

  const handleSubCategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubCategory(subcategory);
    setFormData({
      ...formData,
      categories: [{ category: selectedCategory, subcategory }],
    });
  };

  const handleImageUpload = async (files) => {
    const uploadedImages = [];
    for (const file of files) {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle progress updates if needed
          },
          (error) => {
            console.error("Error uploading image:", error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            uploadedImages.push(downloadURL);
            resolve();
          }
        );
      });
    }
    return uploadedImages;
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    try {
      const uploadedImages = await handleImageUpload(files);
      setFormData({
        ...formData,
        imageURL: [...formData.imageURL, ...uploadedImages],
      });
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleDeleteImage = (url) => {
    const updatedImages = formData.imageURL.filter((image) => image !== url);
    setFormData({ ...formData, imageURL: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (product) {
        const response = await axios.patch(
          `http://localhost:3002/products/${product._id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setUpdatedData(response.data.product); // Update state with the response data
        if (selectedCategory === "scrap") {
          saveScrapData(response.data.product._id);
        }
      } else {
        const response = await axios.post(
          "http://localhost:3002/products",
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setUpdatedData(response.data.product); // Update state with the response data
        if (selectedCategory === "scrap") {
          saveScrapData(response.data.product._id);
        }
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }

    close();
  };

  const saveScrapData = async (productID) => {
    const scrapData = {
      scrapFormData,
      productID,
    };
    console.log("🚀 ~ saveScrapData ~ scrapData:", scrapData)
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/scrap-data`,
        scrapData,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      if (response.status === 200) {
        console.log("Scrap data saved successfully!");
      }
    } catch (error) {
      if (error.response) {
        console.log(
          `Error: ${error.response.data.error || "An error occurred"}`
        );
      } else if (error.request) {
        console.log("Error: No response from server");
      } else {
        console.log(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mt-3">
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="mb-3">
              <h2 className="mb-4">
                {product ? "Edit Product" : "Add New Product"}
              </h2>
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                min="0"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="stockQuantity" className="form-label">
                Stock Quantity:
              </label>
              <input
                type="number"
                id="stockQuantity"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                className="form-control"
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="form-select"
                required
              >
                <option value="">Select Category</option>
                <option value="physicalProduct">Physical Product</option>
                <option value="digitalAsset">Digital Asset</option>
                <option value="scrap">Scrap</option>
              </select>
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="subcategory" className="form-label">
                Sub-Category:
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                className="form-select"
                required
              >
                <option value="">Select Sub-Category</option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {selectedCategory === "scrap" && (
          <ScrapForm
            scrapFormData={scrapFormData}
            handleScrapFormChange={handleScrapFormChange}
          />
        )}

        <div className="mb-3">
          <label htmlFor="brand" className="form-label">
            Brand:
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="length" className="form-label">
                Length:
              </label>
              <input
                type="number"
                id="length"
                name="dimensions.length"
                value={formData.dimensions.length}
                onChange={handleChange}
                className="form-control"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="width" className="form-label">
                Width:
              </label>
              <input
                type="number"
                id="width"
                name="dimensions.width"
                value={formData.dimensions.width}
                onChange={handleChange}
                className="form-control"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="height" className="form-label">
                Height:
              </label>
              <input
                type="number"
                id="height"
                name="dimensions.height"
                value={formData.dimensions.height}
                onChange={handleChange}
                className="form-control"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">
                Weight:
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="form-control"
            multiple
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            placeholder="Add a tag"
            classNames={{
              tags: "ReactTags__tags",
              tag: "ReactTags__tag",
              remove: "ReactTags__remove",
            }}
          />
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            {product ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
