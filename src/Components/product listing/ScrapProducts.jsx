import React, { useState } from 'react';
import './productlisting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { useNavigate } from 'react-router-dom';
import img1 from "../../img/Scrap Images/scrap-prod-01.jpg";
import img2 from "../../img/prod-13.jpg";
import img3 from "../../img/prod-6.jpg";
import img4 from "../../img/Scrap Images/scrap-prod-02.jpg";
import img5 from "../../img/Scrap Images/scrap-prod-03.jpg";
import img6 from "../../img/prod-8.jpg";
import img7 from "../../img/prod-1.jpg";
import img8 from "../../img/prod-5.jpg";
import img9 from "../../img/Scrap Images/scrap-prod-04.jpg";
import img10 from "../../img/Scrap Images/scrap-prod-05.jpg";
const Foryouproducts = [
   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
},   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 ,   {
    id: 1,
    imgSrc: img8, 
    Brand: "Handicrafts",
    Name: "Crstal Handicrafted Royal Craft",
    Ratings: 5,
    Price: "$1330"
},

{
    id: 2,
    imgSrc: img7,
    Brand: "Tealight Candle Holders",
    Name: "Decorative Light Glass",
    Ratings: 4,
    Price: "$140"
},

{
    id: 3,
    imgSrc: img2,
    Brand: "Handicrafts",
    Name: "Pure Craft Hand Bag",
    Ratings: 5,
    Price: "$20"
},

{
    id: 4,
    imgSrc: img6,
    Brand: "Candle Holders",
    Name: "Candle Holder Candlestick",
    Ratings: 4.5,
    Price: "$134"
},

{
    id: 5,
    imgSrc: img1,
    Brand: "Rubbish Revival",
    Name: "Sea Glass and Starfish",
    Ratings: 5,
    Price: "$60"
},

{
    id: 6,
    imgSrc: img9,
    Brand: "Metal Recyclying",
    Name: "Metal Stand for Pens and Pencils",
    Ratings: 4,
    Price: "$175"
},

{
    id: 7,
    imgSrc: img4,
    Brand: "Stained Glass",
    Name: "Windows Bird Decor",
    Ratings: 5,
    Price: "$35"
},

{
    id: 8,
    imgSrc: img5,
    Brand: "Murano Glass",
    Name: "Necklace Moon in aqua-turquoise",
    Ratings: 5,
    Price: "$45"
},

{
    id: 9,
    imgSrc: img3,
    Brand: "Wall Hangings",
    Name: "Eye Mandala Set",
    Ratings: 4,
    Price: "$60"
},

{
    id: 10,
    imgSrc: img10,
    Brand: "Stained Glass for Window",
    Name: "Japanese Crane Unique Suncatcher",
    Ratings: 5,
    Price: "$50"
}  
 
    
];
export default function ScrapProducts() {
    const [visibleProducts, setVisibleProducts] = useState(12); // Initial number of visible products
    const navigate = useNavigate();
  
    const loadMoreProducts = () => {
      setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12); // Increase visible products by 12
    };
  
    const redirectToProductDetail = (product) => {
      navigate('/ScrapyardSingleProductPage', { state: product });
    };
  
    return (
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {/* Map over products and render each product */}
          {Foryouproducts.slice(0, visibleProducts).map(product => (
            <div className="pro" key={product.id}>
              <img
                onClick={() => redirectToProductDetail(product)}
                src={product.imgSrc}
                alt={`Product ${product.id}`}
              />
              <div onClick={() => redirectToProductDetail(product)} className="des">
                <span>{product.Brand}</span>
                <h5>{product.Name}</h5>
                <div className="star">
                  {/* Render star icons based on rating */}
                  {Array.from({ length: product.Ratings }, (_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>
                <h4>{product.Price}</h4>
              </div>
              <div className="cart">
                <a href="#"><FontAwesomeIcon icon={faCartPlus} /></a>
              </div>
            </div>
          ))}
        </div>
        {Foryouproducts.length > visibleProducts && (
          <div>
            <button className="load-more" onClick={loadMoreProducts}>Load More</button>
          </div>
        )}
      </section>
    );
  }