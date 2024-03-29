import React,{ useState } from 'react'
import { useEffect } from "react"
import { NavLink } from "react-router-dom";
import AnalyticsCSS from "./Analytics.module.css"
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Components/sidebar"
export default function Analytics() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(0);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const productsData = [
    { id: 1, name: 'product 1', description: 'i am Product 1' },
    { id: 2, name: 'product 2', description: 'i am Product 2' },
    { id: 3, name: 'product 3', description: 'i am Product 3' },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
 

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? productsData.length - 1 : prevIndex - 1));
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === productsData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <>  
        <div className="container">
                <Sidebar/>
                <main style={{ marginTop: '50px' }}>
                      <h4 className={AnalyticsCSS.analyticheading}>Analytics and Recomendations</h4>
                    <div className={AnalyticsCSS.livedatesection}>
                          <p>{currentDate.toLocaleDateString('en-US', options)}</p>
                    </div>
                        <div className={AnalyticsCSS.productselectsection}>
                        <div className={AnalyticsCSS.selectproductbox}>
                  <div className={AnalyticsCSS.boxdivproductselecter}>           
                     <h3>Select Product</h3>
                  </div>
                  <div className={AnalyticsCSS.productselectslider}>
                    <div>
                    <button style={{ margin:"10px"}} onClick={handlePrevClick} className={AnalyticsCSS.arrowbutton}>
                      {'<'}
                    </button>
                    </div>
                    <div className={AnalyticsCSS.productbox}>
                      <h2>{productsData[currentIndex].name}</h2>
                      <p>{productsData[currentIndex].description}</p>
                    </div>
                    <div>
                    <button style={{ margin:"10px"}}onClick={handleNextClick} className={AnalyticsCSS.arrowbutton}>
                      {'>'}
                    </button>
                    </div>
                  </div>
                  {/* <NavLink className="">View all</NavLink> */}
            <div className={AnalyticsCSS.btndiv}>
                  <button type="button" className={`btn btn-outline-danger ${AnalyticsCSS.viewprobtnproductselector}`} onClick={handleViewAllClick}>
              View all
            </button>
                              <button type="button" className={`btn btn-outline-danger ${AnalyticsCSS.viewprobtnproductselector}`}>Search</button>
                  </div>
                </div>
                        </div>
                </main>
         
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>All Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {productsData.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {product.description}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>  
                
    </>
  )
}
