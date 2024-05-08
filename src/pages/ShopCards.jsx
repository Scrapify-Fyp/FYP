import React from 'react';
import './shop.css';
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import img1 from "../img/mug_art.png";
import img2 from "../img/ora_prints.avif";
import img3 from "../img/sweet_escape.png";
import img4 from "../img/nasty-arts.jpg";
import img5 from "../img/saeed_ghani.webp";
import img6 from "../img/ideas-logo.webp";
import img7 from "../img/Logo_Almirah_Black_110x.webp";
import img8 from "../img/miniso.avif";
import img9 from "../img/anaya_arts.webp";
import img10 from "../img/khaadi.png";
import img11 from "../img/jafar-jees.png";
import img12 from "../img/PaperMarket_Logo.webp";
import img13 from "../img/hyundai-1.png";
import img14 from "../img/Digital_Design.jpeg";
import img15 from "../img/pixel_print.jpeg";
import img16 from "../img/pdf_pantry.gif";
const ShopPage = () => {
  
    
    // Dummy data for products
    const Shops = [
        {
            id: 1,
            imgSrc: img1, 
            brand: "Accessories",
            name: "Mug Art"
        },
        {
            id: 2,
            imgSrc: img2,
            brand: "Accessories",
            name: "Ora Prints"
        },  
        {
            id: 3,
            imgSrc: img3,
            brand: "Food",
            name: "Sweet Escape"
        },
        {
            id: 4,
            imgSrc: img4,
            brand: "Fun & Enjoyment",
            name: "Nasty Arts"
        },
        {
            id: 5,
            imgSrc: img5,
            brand: "Health & Beauty + Perfumes",
            name: "Saeed Ghani"
        },
        {
            id: 6,
            imgSrc: img6,
            brand: "Perfumes",
            name: "Ideas Fragrances"
        },
        {
            id: 7,
            imgSrc: img7,
            brand: "Mens Wear + Womens Wear",
            name: "Almirah"
        },
        {
            id: 8,
            imgSrc: img8,
            brand: "Accessories",
            name: "MiniSO"
        },{
            id: 9,
            imgSrc: img9, 
            brand: "Home Decor",
            name: "Anaya Arts Corner"
        },
        {
            id: 10,
            imgSrc: img10,
            brand: "Accessories + Children Wear + Home Decor + Mens Wear + Womens Wear",
            name: "KHAADI"
        },  
        {
            id: 11,
            imgSrc: img11,
            brand: "Accessories",
            name: "JafferJees"
        },
        {
            id: 12,
            imgSrc: img12,
            brand: "Art & Craft",
            name: "Paper Market"
        },
        {
            id: 13,
            imgSrc: img13,
            brand: "Car Service + Car Products",
            name: "Hyundai"
        },
        {
            id: 14,
            imgSrc: img14,
            brand: "Digital Assets",
            name: "Digital Design Delights"
        },
        {
            id: 15,
            imgSrc: img15,
            brand: "Digital Printing",
            name: "Pixel Prints Hub"
        },
        {
            id: 16,
            imgSrc: img16,
            brand: "Digital Assets",
            name: "PDF Pantry"
        },
    ];
    
    const [visibleProducts, setVisibleProducts] = useState(12); // Initial number of visible products

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12); // Increase visible products by 12
    };
    const redirectToProductDetail = () => {
        window.location.href = '/Singleshope';
    };
    
    return (
        <>
            <div style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
                <Navbar/>
                {/* SHOP PAGE */}

                <section id="product1" className="section-p1">
                <div className="pro-container">
                    {/* Map over products and render each product */}
                    {Shops.slice(0, visibleProducts).map(product => (
                        <div  className="pro" key={product.id}>
                            <img onClick={redirectToProductDetail} src={product.imgSrc} alt={`Product ${product.id}`} />
                            <div onClick={redirectToProductDetail} className="des">
                                <span style={{ fontSize: '14px', fontFamily: 'GillSans-Medium' }}>{product.brand}</span>
                                <h5 style={{ fontSize: '22px', fontFamily: 'GillSans-Medium' }}>{product.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                {Shops.length > visibleProducts && (
                    <div >
                        <button className="load-more" onClick={loadMoreProducts}>Load More</button>
                    </div>
                )}
            </section>
            </div>
        </>
    );
}

export default ShopPage;