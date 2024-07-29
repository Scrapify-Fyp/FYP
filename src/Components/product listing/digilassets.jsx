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
    const [digitalassets, setDigitalAssets] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };

    const redirectToProductDetail = (product) => {
        const startTime = new Date();
        navigate("/ProductDetail", { state: { product, startTime } });
      };
    useEffect(() => {
        const fetchDigitalAssets = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3002/products"); // Adjust the endpoint if needed
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

                    {digitalassets.slice(0, visibleProducts).map((product, index) => (
                        <div key={index} className="pro-scrap">
                            <img
                                onClick={() => redirectToProductDetail(product)}
                                src={product.imageURL}
                                alt={product.name}
                                style={{ cursor: 'pointer' }}
                            />
                            <div
                                onClick={() => redirectToProductDetail(product)}
                                className="des"
                                style={{ cursor: 'pointer' }}
                            >
                                <span>
                                    <FontAwesomeIcon icon={faClock} /> {product.deliveryTime || 'N/A'}
                                </span>
                                <h5>{product.brand}</h5>
                                <div className="star">
                                    {[...Array(Math.floor(product.rating) || 0)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={solidStar} />
                                    ))}
                                    {product.stars % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} />}
                                </div>
                                <h4>{product.price}</h4>
                            </div>
                        </div>
                    ))}
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
