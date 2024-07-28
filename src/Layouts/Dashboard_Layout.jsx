<<<<<<< HEAD
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
=======
import React from 'react'
// import  Navbar  from '../Components/Navbar'
import  Footer  from '../Components/Footer'
>>>>>>> 3cc00601b8728dbe3b620a80159d221f7c96acab

export default function Dashboard_Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container my-4 flex-grow-1 fade-in">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
