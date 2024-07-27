import React, { useEffect, useState } from "react";
import "./productlisting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons"; // Import necessary icons
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ScrapProducts() {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [scrapProducts, setScrapProducts] = useState([]);
  const navigate = useNavigate();

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12); // Increase visible products by 12
  };

  const redirectToProductDetail = (product) => {
    navigate("/ScrapProductDetail", { state: product });
  };

  const getScrapProducts = async () => {
    try {
      // Make the API call to fetch all products
      const response = await axios.get("http://localhost:3002/products");
      const products = response.data;
      console.log("🚀 ~ getScrapProducts ~ Wholeproducts:", products);
      console.log("🚀 ~ getScrapProducts ~ Cateogiryproducts:", products[0].categories[0].category);

      // Check if the response contains products
      // if (Array.isArray(products)) {
        if (products && Array.isArray(products)) {
          const filteredScrapProducts = products.filter(
            (product) =>
              product.categories &&
              Array.isArray(product.categories) &&
              product.categories.length > 0 &&
              product.categories[0].category === "Scrap"
          );
        
          console.log(filteredScrapProducts);
    
        

        // Set the scrap products to state
        setScrapProducts(filteredScrapProducts);
        // console.log("Scrap Products:", scrapProducts);

        // Return the scrap products if needed
        // return scrapProducts;
      } else {
        console.error("Invalid response format");
        // return [];
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  useEffect(() => {
    getScrapProducts();
    console.log("Scrap Products after use efectr:", scrapProducts);
  }, []);

  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {/* Map over products and render each product */}
        {scrapProducts.slice(0, visibleProducts).map((product) => (
          <div className="pro" key={product._id}>
            <img
              onClick={() => redirectToProductDetail(product)}
              src={product.imageURL} // Ensure this is the correct property name
              alt={`Product ${product._id}`}
            />
            <div
              onClick={() => redirectToProductDetail(product)}
              className="des"
            >
              <span>{product.Brand}</span>
              <h5>{product.Name}</h5>
              <div className="star">
                {/* Render star icons based on rating */}
                {Array.from({ length: product.Ratings || 0 }, (_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
              <h4>{product.Price}</h4>
            </div>
            <div className="cart">
              <a href="#">
                {" "}
                {/* Add appropriate function for cart action */}
                <FontAwesomeIcon icon={faCartPlus} />
              </a>
            </div>
          </div>
        ))}
      </div>
      {scrapProducts.length > visibleProducts && (
        <div>
          <button className="load-more" onClick={loadMoreProducts}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
