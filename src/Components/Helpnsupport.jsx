import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/shop.css"
import Sidebar from "./sidebar"
export default function Helpnsupport() {
  return (
  
    <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
<Sidebar activeprofile={"active"} />
            <main style={{margintop: '58px'}}>
                <div className="container pt-4">
                  <div className="polics">
                 
                  <h1>Help and Support</h1>

<p>Welcome to Scrapify's Help and Support page! If you have any questions, concerns, or need assistance, you've come to the right place. Below, you'll find information on how to get help and answers to common inquiries.</p>

<h3>Contact Us</h3>

<p>If you need further assistance or have specific questions, please don't hesitate to contact our support team. You can reach us via email at support@scrapify.com or by filling out the contact form on our website.</p>

<h3>Frequently Asked Questions (FAQs)</h3>

<p>Before reaching out to our support team, you may find the answer to your question in our Frequently Asked Questions (FAQs) section. We've compiled a list of common inquiries and provided detailed answers to help you troubleshoot issues or find information quickly.</p>

<h3>Community Forums</h3>

<p>Join our vibrant community forums to connect with other Scrapify users, share tips and advice, and engage in discussions related to upcycling, recycling, and sustainable living. Our community is a valuable resource for learning, collaboration, and support.</p>

<h3>Helpful Resources</h3>

<p>In addition to our support channels, we offer a variety of helpful resources to assist you in using Scrapify effectively. Explore our blog posts, tutorials, and guides for tips on buying and selling, product listings, and platform features.</p>

<p>Thank you for choosing Scrapify! We're here to help you every step of the way.</p>

        </div>
                  </div>    
             
            </main>
    </div>            
  )
}
