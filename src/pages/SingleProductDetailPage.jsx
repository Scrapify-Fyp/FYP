import React,{useEffect, useState} from 'react';
import prod01Full from '../img/prod-01-full.jpg';
import prod01Full02 from '../img/prod-01-full (02).jpg';
import prod01Full03 from '../img/prod-01-full (03).jpg';
import prod01Full04 from '../img/prod-01-full (04).jpg';
import Youmaylike from "../Components/product listing/Youmaylike";
import './shop.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const SingleProductDetailPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleSmallImageClick = (src) => {
        document.getElementById('mainImg').src = src;
    };

    const redirectToProductDetail = () => {
        window.location.href = '/ProductDetail';
    };

    const products = document.querySelectorAll('.pro');
    products.forEach((product) => {
        product.addEventListener('click', redirectToProductDetail);
    });

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const magnifier = document.getElementById('magnifier');
        const mainImg = document.getElementById('mainImg');

        magnifier.style.left = `${event.clientX - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${event.clientY - magnifier.offsetHeight / 2}px`;

        const scale = 3;
        const transformOriginX = (offsetX / rect.width) * 100 + '%';
        const transformOriginY = (offsetY / rect.height) * 100 + '%';
        mainImg.style.transformOrigin = `${transformOriginX} ${transformOriginY}`;
        mainImg.style.transform = `scale(${scale})`;

        magnifier.style.display = 'block';
    };

    const handleMouseLeave = () => {
        const magnifier = document.getElementById('magnifier');
        const mainImg = document.getElementById('mainImg');

        magnifier.style.display = 'none';
        mainImg.style.transform = 'scale(1)';
    };

    return (
        <>
        <div className="container" style={{width: "100%",margin:"0",padding:"0px",maxWidth:"100%"}}>
            <Navbar/>
            <section id="pro-details" className="section-p1">
                <div id="pro-details">
                    <div className="single-pro-img">
                        <div className="small-img-grp">
                            <div className="small-img-col">
                                <img src={prod01Full} width="100%" className="small-img" alt="" onClick={() => handleSmallImageClick(prod01Full)} />
                            </div>
                            <div className="small-img-col">
                                <img src={prod01Full02} width="100%" className="small-img" alt="" onClick={() => handleSmallImageClick(prod01Full02)} />
                            </div>
                            <div className="small-img-col">
                                <img src={prod01Full03} width="100%" className="small-img" alt="" onClick={() => handleSmallImageClick(prod01Full03)} />
                            </div>
                            <div className="small-img-col">
                                <img src={prod01Full04} width="100%" className="small-img" alt="" onClick={() => handleSmallImageClick(prod01Full04)} />
                            </div>
                        </div>
                        <div id="mainImgContainer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                            <img src={prod01Full} width="100%" height="auto" id="mainImg" alt="Main Image" />
                        </div>
                        <div id="magnifier"></div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h6>Brand / KHAADI </h6>
                    <h4>ELLEGANCE FLORA - GREEN</h4>
                    <h2>PKR 9,845.00</h2>
                    <div className="siz-options">
                        <div className="size-item">
                            <input type="radio" id="S" name="options" className="option-select" value="" />
                            <label htmlFor="S" className="edit-size-checked">S</label>
                        </div>
                        <div className="size-item">
                            <input type="radio" id="M" name="options" className="option-select" value="" />
                            <label htmlFor="M" className="edit-size-checked">M</label>
                        </div>
                        <div className="size-item">
                            <input type="radio" id="L" name="options" className="option-select" value="" />
                            <label htmlFor="L" className="edit-size-checked">L</label>
                        </div>
                        <div className="size-item">
                            <input type="radio" id="XL" name="options" className="option-select" value="" />
                            <label htmlFor="XL" className="edit-size-checked">XL</label>
                        </div>
                    </div>
                    <button className="quantity-button" onClick={handleDecreaseQuantity}>-</button>
                    <input className="quantity"  value={quantity} />
                    <button className="quantity-button" onClick={handleIncreaseQuantity}>+</button>
                    <button className="normal">Add to Cart</button>
                    <button className="normal">Contract</button>
                    <h4>Product Details</h4>
                    <span>Ellegance Flora <br />
                        <strong>Shirt: </strong> Embroidered Cotton Karandi Sp 2.50 Meter <br />
                        <strong>Dupatta: </strong> Embroidered Chiffon Self 2.50 Meter <br />
                        <strong>Shalwar: </strong> Plain Cotton Karandi Sp 2.50 Meter
                    </span>
                </div>
            </section>
          <Youmaylike/>
          <Footer/>
          </div>
        </>
    );
};

export default SingleProductDetailPage;
