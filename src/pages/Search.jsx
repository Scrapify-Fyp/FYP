import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Searchproducts from '../Components/product listing/Searchproducts';
import 'bootstrap/dist/css/bootstrap.min.css';

const FilterSlider = () => {
  const [sortOption, setSortOption] = useState('');
  const [priceRange, setPriceRange] = useState([]);
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    updateQueryParams(e.target.value, priceRange, category, rating);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    const newPriceRange = priceRange.includes(value)
      ? priceRange.filter((item) => item !== value)
      : [...priceRange, value];
    setPriceRange(newPriceRange);
    updateQueryParams(sortOption, newPriceRange, category, rating);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    const newCategory = category.includes(value)
      ? category.filter((item) => item !== value)
      : [...category, value];
    setCategory(newCategory);
    updateQueryParams(sortOption, priceRange, newCategory, rating);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    updateQueryParams(sortOption, priceRange, category, e.target.value);
  };

  const updateQueryParams = (sort, price, cat, rate) => {
    const params = new URLSearchParams();
    if (sort) params.set('sort', sort);
    if (price.length) params.set('price', price.join(','));
    if (cat.length) params.set('category', cat.join(','));
    if (rate) params.set('rating', rate);

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="filter-slider p-3 border rounded bg-light shadow-sm">
      <div className="mb-3">
        <h5 className="text-primary">Sort By</h5>
        <select
          className="form-select transition"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Select</option>
          <option value="a-z">Alphabetically A-Z</option>
          <option value="z-a">Alphabetically Z-A</option>
          <option value="price-low-high">Price, low to high</option>
          <option value="price-high-low">Price, high to low</option>
        </select>
      </div>

      <div className="mb-3">
        <h5 className="text-primary">Price Range</h5>
        {['100-3000', '3000-6000', '6000-9000', '9000-12000', 'above-12000'].map((range, index) => (
          <div className="form-check transition" key={index}>
            <input
              type="checkbox"
              value={range}
              checked={priceRange.includes(range)}
              onChange={handlePriceChange}
              className="form-check-input"
              id={`price${index}`}
            />
            <label className="form-check-label" htmlFor={`price${index}`}>
              {range.replace('-', ' - ')}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <h5 className="text-primary">Category</h5>
        {['Physical Products', 'Digital Assets', 'Scraps'].map((cat, index) => (
          <div className="form-check transition" key={index}>
            <input
              type="checkbox"
              value={cat}
              checked={category.includes(cat)}
              onChange={handleCategoryChange}
              className="form-check-input"
              id={`cat${index}`}
            />
            <label className="form-check-label" htmlFor={`cat${index}`}>
              {cat}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <h5 className="text-primary">Rating</h5>
        {['1', '2', '3', '4', '5'].map((star, index) => (
          <div className="form-check transition" key={index}>
            <input
              type="radio"
              value={star}
              checked={rating === star}
              onChange={handleRatingChange}
              className="form-check-input"
              id={`rating${index}`}
            />
            <label className="form-check-label" htmlFor={`rating${index}`}>
              {star} Star{star > 1 ? 's' : ''} & Up
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Search() {
  return (
    <>
      <div className="container-fluid p-4 bg-light">
        <Navbar />
        <div className="row">
          <div className="col-md-3 mb-4">
            <FilterSlider />
          </div>
          <div className="col-md-9">
            <Searchproducts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
