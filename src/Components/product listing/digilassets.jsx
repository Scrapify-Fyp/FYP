import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faStarHalf } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../img/dA/DA-01.jpg";
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
  { image: img1, deliveryTime: '2 Day Delivery', title: 'Expert Crafted Logo Design', stars: 5, price: 'RS:30' },
  { image: img2, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img3, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img4, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img6, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img7, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img8, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img9, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img10, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img10, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
  { image: img10, deliveryTime: '4 Day Delivery', title: 'AI Based 2D Drawing with UI-Design', stars: 5, price: 'RS:100' },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  {
        image:img1,
        deliveryTime: '2 Day Delivery',
        title: 'Expert Crafted Logo Design',
        stars: 5,
        price: 'RS:30'
      },
      {
        image: img2,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
      },  
    {
        image: img3,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img4,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img6,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img7,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img8,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },{
        image: img9,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
    {
        image: img10,
        deliveryTime: '4 Day Delivery',
        title: 'AI Based 2D Drawing with UI-Design',
        stars: 5,
        price: 'RS:100'
    },  
];
export default function Digilassets() {
    const [visibleProducts, setVisibleProducts] = useState(9); 
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const loadMoreProducts = () => {
      setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 9); 
    };
  
    const redirectToProductDetail = () => {
      window.location.href = '/ProductDetail';
    };
  
    // Responsive styles
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
      width: '100%',
      height: 'auto',
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
  
    return (
      <section id="product1" style={{ padding: '20px' }}>
        <div style={containerStyle}>
          {digitalassets.slice(0, visibleProducts).map((product, index) => (
            <div key={index} style={productStyle} onClick={redirectToProductDetail}>
              <img src={product.image} alt={product.title} style={imageStyle} />
              <div style={descriptionStyle}>
                <span>
                  <FontAwesomeIcon icon={faClock} /> {product.deliveryTime}
                </span>
                <h5 style={titleStyle}>{product.title}</h5>
                <div style={{ margin: '10px 0' }}>
                  {[...Array(product.stars)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={solidStar} style={{ color: '#f5c518', marginRight: '2px' }} />
                  ))}
                  {product.stars % 1 !== 0 && <FontAwesomeIcon icon={faStarHalf} style={{ color: '#f5c518', marginRight: '2px' }} />}
                </div>
                <h4 style={priceStyle}>{product.price}</h4>
              </div>
            </div>
          ))}
        </div>
        {digitalassets.length > visibleProducts && (
          <button style={buttonStyle} onClick={loadMoreProducts}>Load More</button>
        )}
      </section>
    );
  }
  