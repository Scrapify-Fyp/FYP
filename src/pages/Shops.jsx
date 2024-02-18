import React from 'react';
import './shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus, faArrowRight ,faArrowLeft} from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { useState } from 'react';
import Navbar from '../Components/Navbar';
import img1 from "../img/prod-10.jpg";
import img2 from "../img/prod-13.jpg";
import img3 from "../img/prod-6.jpg";
import img4 from "../img/prod-12.jpg";
import img5 from "../img/prod-9.jpg";
import img6 from "../img/prod-8.jpg";
import img7 from "../img/prod-1.jpg";
import img8 from "../img/prod-5.jpg";
import Footer from '../Components/Footer';
const ShopPage = () => {
  
    
    // Dummy data for products
    const Shops = [
        {
            id: 1,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 2,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 3,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 4,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 5,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 6,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 7,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 8,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 9,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 10,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 11,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 12,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 13,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 14,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 15,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 16,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 17,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 18,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 19,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 20,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 21,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 22,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 23,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 24,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 25,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 26,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 27,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 28,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 29,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 30,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 31,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 32,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 33,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 34,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 35,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 36,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 37,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 38,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 39,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 40,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 41,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 42,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 43,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 44,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 45,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 46,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 47,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 48,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 49,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 50,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 51,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 52,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 53,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 54,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 55,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 56,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 57,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 58,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 59,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 60,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 61,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 62,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 63,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 64,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 1,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 2,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 3,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 4,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 5,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 6,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 7,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 8,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 9,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 10,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 11,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 12,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 13,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 14,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 15,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 16,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 17,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 18,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 19,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 20,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 21,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 22,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 23,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 24,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 25,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 26,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 27,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 28,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 29,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 30,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 31,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 32,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 33,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 34,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 35,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 36,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 37,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 38,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 39,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 40,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 41,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 42,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 43,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 44,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 45,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 46,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 47,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 48,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 49,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 50,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 51,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 52,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 53,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 54,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 55,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 56,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 57,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 58,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 59,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 60,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 61,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 62,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 63,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 64,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 1,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 2,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 3,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 4,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 5,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 6,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 7,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 8,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 9,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 10,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 11,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 12,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 13,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 14,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 15,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 16,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 17,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 18,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 19,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 20,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 21,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 22,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 23,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 24,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 25,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 26,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 27,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 28,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 29,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 30,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 31,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 32,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 33,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 34,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 35,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 36,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 37,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 38,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 39,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 40,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 41,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 42,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 43,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 44,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 45,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 46,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 47,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 48,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 49,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 50,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 51,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 52,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 53,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 54,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 55,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 56,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 57,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 58,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 59,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 60,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 61,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 62,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 63,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 64,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 1,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 2,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 3,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 4,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 5,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 6,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 7,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 8,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 9,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 10,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 11,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 12,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 13,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 14,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 15,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 16,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 17,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 18,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 19,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 20,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 21,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 22,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 23,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 24,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 25,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 26,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 27,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 28,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 29,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 30,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 31,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 32,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 33,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 34,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 35,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 36,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 37,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 38,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 39,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 40,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 41,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 42,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 43,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 44,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 45,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 46,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 47,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 48,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
        {
            id: 49,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 50,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 51,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 52,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 53,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 54,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 55,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 56,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },{
            id: 57,
            imgSrc: img1, 
            brand: "Khaadi",
            name: "Basic Winter Clothes",
            rating: 4,
            price: 50
        },
        {
            id: 58,
            imgSrc: img2,
            brand: "Handicrafts",
            name: "Pure Craft Hand Bag",
            rating: 5,
            price: 20
        },  
        {
            id: 59,
            imgSrc: img3,
            brand: "Wall Hangings",
            name: "Eye Mandala Set",
            rating: 4,
            price: 60
        },
        {
            id: 60,
            imgSrc: img4,
            brand: "ROLEX",
            name: "Luxury Men Watch",
            rating: 5,
            price: 435
        },
        {
            id: 61,
            imgSrc: img5,
            brand: "Embroided",
            name: "Coral Block Silver Print - Coat",
            rating: 4,
            price: 66.76
        },
        {
            id: 62,
            imgSrc: img6,
            brand: "Candle Holders",
            name: "Candle Holder Candlestick",
            rating: 4.5,
            price: 134
        },
        {
            id: 63,
            imgSrc: img7,
            brand: "Tealight Candle Holders",
            name: "Decorative Light Glass",
            rating: 4,
            price: 140
        },
        {
            id: 64,
            imgSrc: img8,
            brand: "Handicrafts",
            name: "Crystal Handicrafted Royal Cart",
            rating: 5,
            price: 1330
        },
    ];
    
    const [visibleProducts, setVisibleProducts] = useState(12); // Initial number of visible products

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12); // Increase visible products by 12
    };
    const redirectToProductDetail = () => {
        window.location.href = '/ProductDetail';
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

                <section id="product1" className="section-p1">
                <div className="pro-container">
                    {/* Map over products and render each product */}
                    {Shops.slice(0, visibleProducts).map(product => (
                        <div  className="pro" key={product.id}>
                            <img onClick={redirectToProductDetail} src={product.imgSrc} alt={`Product ${product.id}`} />
                            <div onClick={redirectToProductDetail} className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {/* Render star icons based on rating */}
                                    {Array.from({ length: product.rating }, (_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} />
                                    ))}
                                </div>
                                <h4>${product.price}</h4>
                            </div>
                            <button className="cart" onClick={redirectTocart}><a href="#"><FontAwesomeIcon icon={faCartPlus} /></a></button>
                        </div>
                    ))}
                </div>
                {Shops.length > visibleProducts && (
                    <div >
                        <button className="load-more" onClick={loadMoreProducts}>Load More</button>
                    </div>
                )}
            </section>
                    <Footer/>
            </div>
        </>
    );
}

export default ShopPage;
