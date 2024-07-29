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
import { ProgressBar } from 'react-bootstrap';


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

  const [tags, setTags] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);


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

        "Home Appliances", "Electronics", "Furniture", "Clothing", "Footwear",
        "Kitchenware", "Toys", "Sports Equipment", "Stationery",
        "Beauty Products", "Jewelry", "Gardening Tools", "Automobile Parts"
      ];
    } else if (category === "digitalAsset") {
      subCategoryOptions = [
        "Assignments", "Projects", "E-books", "Software",
       "Courses", "Templates", "Fonts", "Graphics",
        "Photography", "Virtual Reality", "Websites", "Mobile Apps", "Games"
      ];
    } else if (category === "scrap") {
      subCategoryOptions = [
        "Wall Hangings", "Decoration Pieces", "Metal Scraps", "Wood Scraps", "Plastic Scraps",
        "Paper Scraps", "Glass Scraps", "E-waste", "Batteries",
        "Old Furniture", "Used Appliances", "Tires", "Clothing Scraps"

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

  
      setUploading(true);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            console.error("Error uploading image:", error);
            setUploading(false);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            uploadedImages.push(downloadURL);
            setUploading(false);
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

              <label htmlFor="subcategory" className="form-label ANP-label">Subcategory:</label>

              <select
                id="subcategory"
                name="subcategory"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                className="form-select"
                required
              >
                <option value="">Select Subcategory</option>
                {subCategories.map((subCategory, index) => (
                  <option key={index} value={subCategory}>{subCategory}</option>
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
          <label htmlFor="brand" className="form-label ANP-label">
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
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">
                Weight:
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}

                className="form-control ANP-input"
                min="0"
                step="0.01"

                required
              />
            </div>
          </div>



          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="color" className="form-label ANP-label">Color:</label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="form-control ANP-input"
                required
              />
            </div>
          </div>

          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="material" className="form-label ANP-label">Material:</label>
              <input
                type="text"
                id="material"
                name="material"
                value={formData.material}
                onChange={handleChange}
                className="form-control ANP-input"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="keywords" className="form-label ANP-label">Keywords:</label>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}

            inputFieldPosition="bottom"
            autocomplete
            classNames={{
              tags: 'tagsClass',
              tagInput: 'tagInputClass',
              tagInputField: 'tagInputFieldClass',
              selected: 'selectedClass',
              tag: 'tagClass',
              remove: 'removeClass',
              suggestions: 'suggestionsClass',
            }}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="discounts" className="form-label ANP-label">Discounts:</label>
          <input
            type="text"
            id="discounts"
            name="discounts"
            value={formData.discounts}
            onChange={handleChange}
            className="form-control ANP-input"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="availabilityStatus" className="form-label ANP-label">Availability Status:</label>
          <select
            id="availabilityStatus"
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            className="form-select ANP-select"
            required
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label ANP-label">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="form-control ANP-input"
            min="0"
            max="5"
            step="0.1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label ANP-label">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleFileChange}
            className="form-control ANP-input"
            multiple
          />
          {uploading && <ProgressBar now={uploadProgress} label={`${uploadProgress.toFixed(0)}%`} />}
          <div className="mt-2">
            {formData.imageURL.map((url, index) => (
              <div key={index} className="image-preview">
                <img src={url} alt={`Product Image ${index}`} className="img-thumbnail" style={{ width: "100px", height: "100px" }} />
                <button
                  type="button"
                  className="btn btn-danger btn-sm mt-1"
                  onClick={() => handleDeleteImage(url)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          {product ? "Update Product" : "Add Product"}
        </button>

      </form>
    </div>
  );
}
