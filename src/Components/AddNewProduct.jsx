import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../hooks/auth";
import { WithContext as ReactTags } from 'react-tag-input';
import { storage } from "../Config/Firbase"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function AddNewProduct({ close, product }) {
  const user = auth();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [formData, setFormData] = useState({
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
  });
  const [tags, setTags] = useState([]);
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    if (product) {
      setFormData(product);
      setSelectedCategory(product.categories[0]?.category || "");
      setSelectedSubCategory(product.categories[0]?.subcategory || "");
      setTags(product.keywords.map((keyword) => ({ id: keyword, text: keyword })));
    }
  }, [product]);

  const handleDelete = (i) => {
    const updatedTags = tags.filter((tag, index) => index !== i);
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
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    let subCategoryOptions = [];
    if (category === "physicalProduct") {
      subCategoryOptions = [
        "Home Appliances", "Electronics", "Furniture", "Clothing", "Footwear",
        "Kitchenware", "Toys", "Sports Equipment", "Books", "Stationery",
        "Beauty Products", "Jewelry", "Gardening Tools", "Automobile Parts", "Pet Supplies"
      ];
    } else if (category === "digitalAsset") {
      subCategoryOptions = [
        "Assignments", "Projects", "E-books", "Software", "Music",
        "Videos", "Courses", "Templates", "Fonts", "Graphics",
        "Photography", "Virtual Reality", "Websites", "Mobile Apps", "Games"
      ];
    } else if (category === "scrap") {
      subCategoryOptions = [
        "Wall Hangings", "Decoration Pieces", "Metal Scraps", "Wood Scraps", "Plastic Scraps",
        "Paper Scraps", "Fabric Scraps", "Glass Scraps", "E-waste", "Batteries",
        "Old Furniture", "Used Appliances", "Tires", "Clothing Scraps", "Miscellaneous"
      ];
    }
    setSubCategories(subCategoryOptions);
    setSelectedSubCategory(""); // Reset sub-category
    setFormData({ ...formData, categories: [{ category, subcategory: "" }] });
  };

  const handleSubCategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubCategory(subcategory);
    setFormData({ ...formData, categories: [{ category: selectedCategory, subcategory }] });
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
      setFormData({ ...formData, imageURL: [...formData.imageURL, ...uploadedImages] });
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
        await axios.put(
          `http://localhost:3002/products/${product._id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
      } else {
        await axios.post(
          "http://localhost:3002/products",
          formData,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
      }
      close(); 
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="container mt-3">
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="mb-3">
              <h2>{product ? "Edit Product" : "Add New Product"}</h2>
              <label htmlFor="name" className="form-label ANP-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control ANP-input"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="price" className="form-label ANP-label">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control ANP-input"
                min="0"
                required
              />
            </div>
          </div>
          <div className="col-sm">
            <label htmlFor="stockQuantity" className="form-label ANP-label">Stock Quantity:</label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleChange}
              className="form-control ANP-input"
              min="0"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label ANP-label">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control ANP-input"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <div className="mb-3">
              <label htmlFor="category" className="form-label ANP-label">Category:</label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="form-select ANP-select"
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
              <label htmlFor="subCategory" className="form-label ANP-label">Sub-Category:</label>
              <select
                id="subCategory"
                name="subCategory"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                className="form-select ANP-select"
                required
              >
                <option value="">Select Sub-Category</option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>{subCategory}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="images" className="form-label ANP-label">Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
            className="form-control ANP-input"
          />
          <div className="image-preview mt-2">
            {formData.imageURL.map((url, index) => (
              <div key={index} className="image-thumbnail flex flex-wrap">
                <img style={{width:"250px",height:"300px"}} src={url} alt={`Product Image ${index + 1}`} className="img-thumbnail" />
                <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteImage(url)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="brand" className="form-label ANP-label">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="form-control ANP-input"
          />
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <label htmlFor="weight" className="form-label ANP-label">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="color" className="form-label ANP-label">Color:</label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="material" className="form-label ANP-label">Material:</label>
            <input
              type="text"
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col-sm">
            <label htmlFor="length" className="form-label ANP-label">Length:</label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.dimensions.length}
              onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, length: e.target.value } })}
              className="form-control ANP-input"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="width" className="form-label ANP-label">Width:</label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.dimensions.width}
              onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, width: e.target.value } })}
              className="form-control ANP-input"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="height" className="form-label ANP-label">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.dimensions.height}
              onChange={(e) => setFormData({ ...formData, dimensions: { ...formData.dimensions, height: e.target.value } })}
              className="form-control ANP-input"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label ANP-label">Keywords:</label>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            inputFieldPosition="bottom"
            autocomplete
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

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2" onClick={close}>Cancel</button>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            {product ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
