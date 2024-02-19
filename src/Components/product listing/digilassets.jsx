import React ,{useState}from 'react';
import './productlisting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';import img1 from "../../img/dA/DA-01.jpg";
import img2 from "../../img/dA/DA-02.jpg";
import img3 from "../../img/dA/DA-03.jpg";
import img4 from "../../img/dA/DA-04.jpg";
import img5 from "../../img/dA/DA-05.jpg";
import img6 from "../../img/dA/DA-06.jpg";
import img7 from "../../img/dA/DA-07.jpg";
import img8 from "../../img/dA/DA-08.jpg";
import img9 from "../../img/dA/DA-09.jpg";
import img10 from "../../img/dA/DA-10.jpg";
const digitalassets = [
    {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'From $30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img5,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'From $100'
    },  
    
];
export default function Digilassets() {
    const [visibleProducts, setVisibleProducts] = useState(12); // Initial number of visible products

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12); // Increase visible products by 12
    };
    const redirectToProductDetail = () => {
        window.location.href = '/ProductDetail';
    };
  return (
    <>
                 <section id="product1" className="section-p1">
      <div className="pro-container">
        {digitalassets.map((product, index) => (
          <div key={index} className="pro-scrap">
            <img src={product.image} alt={`Product ${index + 1}`} />
            <div className="des">
              <span>
                <FontAwesomeIcon icon={faClock} /> {product.deliveryTime}
              </span>
              <h5>{product.title}</h5>
              <div className="star">
                {[...Array(product.stars)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={solidStar} />
                ))}
                {product.stars % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} />}
              </div>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
