import React from 'react';
import './shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faArrowRight ,faArrowLeft} from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { useState, useEffect } from 'react';
import Shopards from '../Components/ShopCards';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ShopPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    const [visibleProducts, setVisibleProducts] = useState(12); // Initial number of visible products

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12); // Increase visible products by 12
    };
    const redirectToProductDetail = () => {
        window.location.href = '/Singleshope';
    };
    const redirectTocart = () => {
        window.location.href = '';
    };
    
    return (
        <>
            <div style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
                <Navbar/>
                {/* SHOP PAGE */}
                <section id="page-header">
                    <h2>#stay at Home - SHOP</h2>
                </section>
          <Shopards/>
                    <Footer/>
            </div>
        </>
    );
}

export default ShopPage;
