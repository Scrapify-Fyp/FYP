import React from 'react';
import ContactUsCSS from "./Contact_us.module.css";
import img1 from "../img/location.png"
import img2 from "../img/email.png"
import img3 from "../img/phone.png"
import img4 from "../img/1.png"
import img5 from "../img/2.png"
import img6 from "../img/3.png"
import img7 from "../img/4.png"
import img8 from "../img/5.png"
import Navbar  from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactUs = () => {
  return (
    <>
    <div className="container">
      <Navbar/>
    <div className={ContactUsCSS.section}>
      <div className={ContactUsCSS.container}>
        <div className={ContactUsCSS.contactInfo}>
          <h2>Contact Info</h2>
          <ul className={ContactUsCSS.info}>
            <li>
              <span><img src={img1} alt="Address" /></span>
              <span>C-II Block C 2, <br /> Phase 1 Johar Town, <br /> Lahore, Punjab 54770</span>
            </li>
            <li>
              <span><img src={img2} alt="Email" /></span>
              <span>admissions@umt.edu.pk</span>
            </li>
            <li>
              <span><img src={img3} alt="Phone" /></span>
              <span>+92 42 35212801-10</span>
            </li>
          </ul>
          <ul className={ContactUsCSS.social}>
            <li><a href="#"><img src={img4} alt="facebook" /></a></li>
            <li><a href="#"><img src={img5} alt="twitter" /></a></li>
            <li><a href="#"><img src={img6} alt="instagram" /></a></li>
            <li><a href="#"><img src={img7} alt="pinterest" /></a></li>
            <li><a href="#"><img src={img8} alt="linked-in" /></a></li>
          </ul>
        </div>

        <div className={ContactUsCSS.contactForm}>
          <h2>Message Now</h2>
          <div className={ContactUsCSS.formBox}>
            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w50}`}>
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w50}`}>
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w50}`}>
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w50}`}>
              <input type="tel" required />
              <span>Phone</span>
            </div>
            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w100}`}>
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>

            <div className={`${ContactUsCSS.inputBox} ${ContactUsCSS.w100}`}>
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default ContactUs;
