import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Components/sidebar";
import AnalyticsCSS from "./Analytics.module.css";
import Analyticsproduct from '../Components/product listing/Analyticsproduct';

export default function Analytics() {
  const [showModal, setShowModal] = useState(false);
  const handlePredictionGeneration = () => {
    alert('AI prediction generated! Here are some suggestions to increase sales.');
  };
  const containerStyle = {
    // backgroundColor:"#3c3569",
    margin: '30px',
    padding: '1rem',
};
const line={
    // marginbottom: "15px",
    // width: "110%",
    // backgroundcolor: "bla",
    // padding: "0.5px"
    marginBottom:"15px",
    width:"110%",
    backgroundColor:"black",
    padding:"0.5px"
}
const cardStyle = {
    backgroundColor: '#4bc0c0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem',
};

const tableStyle = {
    width: '100%',
};

const buttonStyle = {
    backgroundColor: '#1e8354',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
};

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);

  


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Function to predict price (dummy implementation)
  const predictPrice = (analyticsData) => {
    // Simple prediction: average of analytics data
    const average = analyticsData.reduce((acc, val) => acc + val, 0) / analyticsData.length;
    // Adding a simple multiplier for demonstration
    return Math.round(average * 1.1); // 10% increase
  };
  useEffect(() => {
    const ctx = document.getElementById('salesGraph');
    let chartInstance = null;
  
    if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart instance
    }
  
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Sales',
          data: [50, 70, 65, 80, 75, 90, 85],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
  
    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Cleanup on component unmount
      }
    };
  }, []);
  
  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);

  return (
    <div className="container" style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}>
      <Sidebar />
      <main style={{ margin: '10px' }}>
        <h4 className={AnalyticsCSS.analyticheading}>Analytics and Recommendations</h4>
        <div className={AnalyticsCSS.livedatesection}>
          <p>{currentDate.toLocaleDateString('en-US', options)}</p>
        </div>
        <div className={AnalyticsCSS.productselectsection}>
          <div className={AnalyticsCSS.selectproductbox}>
            <div className={AnalyticsCSS.boxdivproductselecter}>
              <h3>Select Product</h3>
              <h4 style={{color:"#4bc0c0"}}>Product Name</h4>
            </div>
            <div className={AnalyticsCSS.productselectslider}>
            <div className={AnalyticsCSS.graphContainer}>
          <canvas className={AnalyticsCSS.graph} id="salesGraph"></canvas>
        </div>
            </div>
            <div className={AnalyticsCSS.btndiv}>
              <button type="button" className={`btn btn-outline-danger ${AnalyticsCSS.viewprobtnproductselector}`} onClick={handleViewAllClick}>
                View all
              </button>
            </div>
          </div>
        </div>

        

        <div style={containerStyle}>
            <div style={cardStyle}>
                {/* Table with product analytics */}
                <table style={tableStyle}>
                    <tr>
                        <td>Total Sales:</td>
                        <td>$5000</td>
                    </tr>
                    <div style={line}></div>
                    <tr>
                        <td>Total Items Sold:</td>
                        <td>100</td>
                    </tr>
                    <div style={line}></div>
                    <tr>
                        <td>Current Price:</td>
                        <td>$50</td>
                    </tr>
                    <div style={line}></div>
                    <tr>
                        <td>AI Predicted Best Price:</td>
                        <td>$45</td>
                    </tr>
                    <div style={line}></div>

                </table>
            </div>
            
            <div style={cardStyle}>
                {/* Button to generate AI prediction */}
                <button style={buttonStyle} onClick={handlePredictionGeneration}>Generate AI Prediction</button>
            </div>
        </div>

        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>All Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Analyticsproduct />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
}
