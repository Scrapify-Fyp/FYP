import React,{ useState } from 'react'
import { useEffect } from "react"
import { NavLink } from "react-router-dom";
import "./Profile.css"
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
                <main>
                    <div className="container pt-4">
                      <h4 className='analytic-heading'>Analytics and Recomendations</h4>
                    <div className='live-date-section'>
                          <p>{currentDate.toLocaleDateString('en-US', options)}</p>
                    </div>
                        <div className="product-select-section">
                        <div className="select-product-box">
                  <div className="box-div-productselecter">           
                     <h3>Select Product</h3>
                  </div>
                  <div className="product-select-slider">
                    <div>
                    <button style={{ margin:"10px"}} onClick={handlePrevClick} className="arrow-button">
                      {'<'}
                    </button>
                    </div>
                    <div className="product-box">
                      <h2>{productsData[currentIndex].name}</h2>
                      <p>{productsData[currentIndex].description}</p>
                    </div>
                    <div>
                    <button style={{ margin:"10px"}}onClick={handleNextClick} className="arrow-button">
                      {'>'}
                    </button>
                    </div>
                  </div>
                  {/* <NavLink className="">View all</NavLink> */}
                  <button type="button" class="btn btn-outline-primary viewprobtn-productselecter">Search</button>
                  <button type="button" class="btn btn-outline-primary viewprobtn-productselecter">Search</button>
                </div>
                        </div>
                      </div>
                </main>
        </div>            
    </>
  )
}
