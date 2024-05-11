import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user/userSlice";
import { WithContext as ReactTags } from 'react-tag-input';
 export default function AddNewProduct() {
  const user = useSelector(selectUser);
  // console.log("🚀 ~ AddNewProduct ~ user:", user)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    categories: "",
    stockQuantity: 0,
    imageURL: [],
    brand: "",
    weight: "",
    length: 0,
    width: 0,
    height: 0,
    color: "",
    material: "",
    keywords: [],
    rating: 0,
    // relatedProducts: [],
    discounts: "",
    availabilityStatus: "available",
    vendorId: user.id,
  });


  const handleKeywordChange = (keywords) => {
    setFormData({ ...formData, keywords: keywords.map((keyword) => keyword.text) });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData); // Use the form data for further processing like API call
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/products/", formData);
      console.log("🚀 ~ handleSubmit ~ res:", res);
    } catch (error) {
      console.error(error);
    }
  };
  const [categories, setCategories] = useState([""]);

  const handleCategoryChange = (index, value) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, ""]);
  };
  return (
    <>
      <div className="container mt-5">
        <h1>Add Product</h1>
        <form>
          <div class="row">
            <div class="col">
              <div className="mb-3">
                <label htmlFor="name" className="form-label ANP-label ">
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
            <div class="col">
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
                  min="40"
                  required
                />
              </div>
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

          <div className="mb-3">
            <div>
              {categories.map((category, index) => (
                <div key={index} className="mb-3">
                  <label htmlFor={"category"} className="form-label ANP-label">
                    Category:
                  </label>
                  <select
                    id={`category`}
                    className="form-select  ANP-input"
                    type="text"
                    name={`category`}
                    value={category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home</option>
                  </select>
                </div>
              ))}
              {/* <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleAddCategory}
              >
              </button> */}
            </div>
          </div>
          <div className="mb-3">
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
              min="1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageURL" className="form-label ANP-label">
              Image URL:
            </label>
            <input
              type="file"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
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
              className="form-control ANP-input"
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="length" className="form-label ANP-label">
              Length:
            </label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="width" className="form-label ANP-label">
              Width:
            </label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label ANP-label">
              Height:
            </label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="form-control ANP-input"
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="keywords" className="form-label ANP-label">
              Keywords:
            </label>
            <ReactTags
              tags={formData.keywords.map((keyword, index) => ({ id: index, text: keyword }))}
              onChange={handleKeywordChange}
              placeholder="Add keywords"
            />
          </div>
          <div className="mb-3">
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
         
          <div className="mb-3">
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
          <div className="mb-3">
            <label
              htmlFor="availabilityStatus"
              className="form-label ANP-label"
            >
              Availability Status:
            </label>
            <select
              id="availabilityStatus"
              name="availabilityStatus"
              value={formData.availabilityStatus}
              onChange={handleChange}
              className="form-select"
            >
              <option value="available">Available</option>
              <option value="outOfStock">Out of Stock</option>
              <option value="discontinued">Discontinued</option>
            </select>
          </div>
      
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
