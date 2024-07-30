import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../pages/shop.css';

const ShopPage = () => {
    const navigate = useNavigate();
    const [shops, setShops] = useState([]);
    const [visibleShops, setVisibleShops] = useState(12);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Fetch shops from API
        axios.get(`${process.env.REACT_APP_BASE_URL}/shop`)
            .then(response => {
                setShops(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the shop data!", error);
            });
    }, []);

    const loadMoreShops = () => {
        setVisibleShops(prevVisibleShops => prevVisibleShops + 12);
    };

    const redirectToShopDetail = (shop) => {
        navigate("/Singleshope", {state: shop});
    };

    return (
        <>
            <div style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}>
                {/* SHOP PAGE */}
                <section id="product1" className="section-p1">
                    <div className="pro-container">
                        {/* Map over shops and render each shop */}
                        {shops.slice(0, visibleShops).map(shop => (
                            <div className="pro" key={shop._id}>
                                <img onClick={
                                    () => {redirectToShopDetail(shop);
                                    }} src={shop.imageUrl || "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={`Shop ${shop._id}`} />
                                <div onClick={
                                    () => {redirectToShopDetail(shop);
                                    }} className="des">
                                    <span style={{ fontSize: '14px', fontFamily: 'GillSans-Medium' }}>{shop.category || "Unknown"}</span>
                                    <h5 style={{ fontSize: '22px', fontFamily: 'GillSans-Medium' }}>{shop.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    {shops.length > visibleShops && (
                        <div>
                            <button className="load-more" onClick={loadMoreShops}>Load More</button>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default ShopPage;
