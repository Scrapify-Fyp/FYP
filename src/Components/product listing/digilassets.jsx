import React, { useEffect, useState } from 'react';
import './productlisting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';

export default function Digilassets() {
  const [digitalassets, setDigitalAssets] = useState([]); // Initialize as an empty array
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
  };

  const productStyle = {
    
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: screenWidth <= 480 ? '100%' : screenWidth <= 768 ? '45%' : '30%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '400px',
    height: '350px',
    display: 'block',
  };

  const descriptionStyle = {
    padding: '10px',
  };

  const titleStyle = {
    fontSize: screenWidth <= 480 ? '12px' : screenWidth <= 768 ? '14px' : '16px',
    margin: '5px 0',
  };

  const priceStyle = {
    fontSize: screenWidth <= 480 ? '14px' : screenWidth <= 768 ? '16px' : '18px',
    color: '#088178',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#e8f6ea',
    color: '#088178',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: screenWidth <= 480 ? '14px' : '16px',
    marginTop: '30px',
    width: '30%',
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
  };

  const redirectToProductDetail = (product) => {
    const startTime = new Date();
    navigate("/DigitalProductDetail", { state: { product, startTime } });
  };

  useEffect(() => {
    const fetchDigitalAssets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`); // Adjust the endpoint if needed
        console.log("🚀 ~ fetchDigitalAssets ~ Response:", response.data);

        // Ensure that response.data is an array
        if (!Array.isArray(response.data)) {
          throw new Error("Data is not an array");
        }

        // Filter products where category is 'Digital Assets'
        const filteredProducts = response.data.filter(product =>
          product.categories && product.categories[0] && product.categories[0].category === 'Digital Assets'
        );

        console.log("Filtered Products:", filteredProducts);
        setDigitalAssets(filteredProducts);
        setError(null);
      } catch (error) {
        console.error("Error fetching digital assets:", error);
        setError("Failed to fetch digital assets");
        toast.error("Failed to fetch digital assets. Please try again later.", {
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDigitalAssets();
  }, []);

  return (
    <>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {loading && (
            <div
              className="spinner-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Puff
                height={100}
                width={100}
                radius={1}
                color="grey"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          {error && <p>{error}</p>}
          {!loading && !error && digitalassets.length === 0 && <p>No digital assets found.</p>}

          <div style={containerStyle}>
            {digitalassets.slice(0, visibleProducts).map((product, index) => (
              <div key={index} style={productStyle} onClick={() => redirectToProductDetail(product)}>
                <img src={product.imageURL} alt={product.name} style={imageStyle} />
                <div style={descriptionStyle}>
                  <span>
                    <FontAwesomeIcon icon={faClock} /> {product.deliveryTime}
                  </span>
                  <h5 style={titleStyle}>{product.brand}</h5>
                  <div style={{ margin: '10px 0' }}>
                    {product.rating && Number.isFinite(product.rating) && product.rating >= 0 ? (
                      [...Array(Math.floor(product.rating))].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={solidStar} style={{ color: '#f5c518', marginRight: '2px' }} />
                      ))
                    ) : null}
                    {product.rating && Number.isFinite(product.rating) && product.rating % 1 !== 0 ? (
                      <FontAwesomeIcon icon={faStarHalf} style={{ color: '#f5c518', marginRight: '2px' }} />
                    ) : null}
                  </div>
                  <h4 style={priceStyle}>Rs:{product.price}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {digitalassets.length > visibleProducts && (
          <div>
            <button className="load-more" onClick={loadMoreProducts}>
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
}
