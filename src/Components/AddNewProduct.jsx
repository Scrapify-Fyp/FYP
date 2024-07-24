import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../hooks/auth";
import { WithContext as ReactTags } from 'react-tag-input';

export default function AddNewProduct({ close }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/products/", formData);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-3">
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label ANP-label">
                Name:
              </label>
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
              <label htmlFor="price" className="form-label ANP-label">
                Price:
              </label>
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
            <label htmlFor="stockQuantity" className="form-label ANP-label">
              Stock Quantity:
            </label>
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
          <label htmlFor="description" className="form-label ANP-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control ANP-input"
            required
          ></textarea>
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="category" className="form-label ANP-label">
                Category:
              </label>
              <select
                id="category"
                className="form-select ANP-input"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select Category</option>
                <option value="physicalProduct">Physical Product</option>
                <option value="digitalAsset">Digital Asset</option>
                <option value="scrap">Scrap</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="subCategory" className="form-label ANP-label">
                Sub-category:
              </label>
              <select
                id="subCategory"
                className="form-select ANP-input"
                name="subCategory"
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                required
              >
                <option value="">Select Sub-category</option>
                {subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="brand" className="form-label ANP-label">
              Brand:
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label ANP-label">
            Image URL or File:
          </label>
          <div className="input-group">
            <input
              type="text"
              id="imageInput"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              className="form-control ANP-input"
              placeholder="Enter image URL"
            />
            <input
              style={{ marginLeft: "30px" }}
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  console.log("File selected:", file);
                }
              }}
              className="form-control ANP-input"
            />
          </div>
        </div>

        <div className="row gx-3 gy-2 align-items-center">
          <div className="col-sm-2">
            <label htmlFor="weight" className="form-label ANP-label">
              Weight:
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>

          <div className="col-sm-2">
            <label htmlFor="dimensions-length" className="form-label ANP-label">
              Length:
            </label>
            <input
              type="number"
              id="dimensions-length"
              name="length"
              value={formData.dimensions.length}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dimensions: { ...formData.dimensions, length: e.target.value },
                })
              }
              className="form-control ANP-input"
              min="0"
            />
          </div>

          <div className="col-sm-2">
            <label htmlFor="dimensions-width" className="form-label ANP-label">
              Width:
            </label>
            <input
              type="number"
              id="dimensions-width"
              name="width"
              value={formData.dimensions.width}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dimensions: { ...formData.dimensions, width: e.target.value },
                })
              }
              className="form-control ANP-input"
              min="0"
            />
          </div>

          <div className="col-sm-2">
            <label htmlFor="dimensions-height" className="form-label ANP-label">
              Height:
            </label>
            <input
              type="number"
              id="dimensions-height"
              name="height"
              value={formData.dimensions.height}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dimensions: { ...formData.dimensions, height: e.target.value },
                })
              }
              className="form-control ANP-input"
              min="0"
            />
          </div>

          <div className="col-sm-2">
            <label htmlFor="color" className="form-label ANP-label">
              Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>

          <div className="col-sm-2">
            <label htmlFor="material" className="form-label ANP-label">
              Material:
            </label>
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

        <div className="row mt-3">
          <div className="col">
            <label htmlFor="rating" className="form-label ANP-label">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="form-control ANP-input"
              min="0"
              max="5"
            />
          </div>

          <div className="col">
            <label htmlFor="discounts" className="form-label ANP-label">
              Discounts:
            </label>
            <input
              type="text"
              id="discounts"
              name="discounts"
              value={formData.discounts}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="availabilityStatus" className="form-label ANP-label">
            Availability Status:
          </label>
          <select
            id="availabilityStatus"
            className="form-select ANP-input"
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            required
          >
            <option value="available">Available</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="keywords" className="form-label ANP-label">
            Keywords:
          </label>
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleDrag={handleDrag}
            placeholder="Add new keyword"
          />
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
