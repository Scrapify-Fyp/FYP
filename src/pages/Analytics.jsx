// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";
// import Chart from "chart.js/auto";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../Components/sidebar";
// import AnalyticsCSS from "./Analytics.module.css";
// import Analyticsproduct from "../Components/product listing/Analyticsproduct";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function Analytics() {
//   const [showModal, setShowModal] = useState(false);
//   const [analyticsData, setAnalyticsData] = useState([]);
//   const [ordersForPredictedProduct, setordersForPredictedProduct] = useState(0);

//   const handlePredictionGeneration = () => {
//     alert(
//       "AI prediction generated! Here are some suggestions to increase sales."
//     );
//   };

//   const containerStyle = {
//     margin: "30px",
//     padding: "1rem",
//   };

//   const line = {
//     marginBottom: "15px",
//     width: "110%",
//     backgroundColor: "black",
//     padding: "0.5px",
//   };

//   const cardStyle = {
//     backgroundColor: "#4bc0c0",
//     boxShadow:
//       "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//     borderRadius: "0.5rem",
//     padding: "1rem",
//     marginBottom: "1rem",
//   };

//   const tableStyle = {
//     width: "100%",
//   };

//   const buttonStyle = {
//     backgroundColor: "#1e8354",
//     color: "#fff",
//     padding: "0.5rem 1rem",
//     borderRadius: "0.5rem",
//   };

//   const [currentDate, setCurrentDate] = useState(new Date());

//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentDate(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const getOrdersOfPredictedProduct = async (productId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3002/orders/product/${productId}`
//       );
//       // console.log("Orders for the predicted product:", response.data);
//       if (response.status === 200) {
//         setordersForPredictedProduct(response.data);
//         toast.success("Orders fetched successfully!");
//       } else {
//         toast.error("Failed to fetch orders. Please try again.");
//       }
//       return response.data;
//     } catch (error) {
//       console.log("Failed to fetch orders:", error.response.data.message);
//       // toast.error(error.response.data.message);

//       throw error; // Re-throw the error for handling elsewhere if needed
//     }
//   };

//   // Update chart when analyticsData changes
//   useEffect(() => {
//     if (analyticsData) {
//       getOrdersOfPredictedProduct(analyticsData?.product?._id)
//         .then((orders) => {
//           // Handle the orders data
//           // console.log("orders:::froms this product: ",orders);
//           setordersForPredictedProduct(orders?.length);
//           console.log("ordersCount: ", ordersForPredictedProduct);
//         })
//         .catch((error) => {
//           // Handle the error
//         });
//     }
//     const ctx = document.getElementById("salesGraph");
//     const chartInstance = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
//         datasets: [
//           {
//             label: "Sales",
//             data: 0,
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       },
//     });

//     return () => chartInstance.destroy(); // Cleanup on component unmount
//   }, [analyticsData]);

//   const handleModalClose = () => setShowModal(false);
//   const handleViewAllClick = () => setShowModal(true);

//   return (
//     <div
//       className="container"
//       style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
//     >
//       <Sidebar />
//       <main style={{ margin: "10px" }}>
//         <h4 className={AnalyticsCSS.analyticheading}>
//           Analytics and Recommendations
//         </h4>
//         <div className={AnalyticsCSS.livedatesection}>
//           <p>{currentDate.toLocaleDateString("en-US", options)}</p>
//         </div>
//         <div className={AnalyticsCSS.productselectsection}>
//           <div className={AnalyticsCSS.selectproductbox}>
//             <div className={AnalyticsCSS.boxdivproductselecter}>
//               <h3>Select Product</h3>
//               <h4 style={{ color: "#4bc0c0" }}>Product Name</h4>
//             </div>
//             <div className={AnalyticsCSS.productselectslider}>
//               <div className={AnalyticsCSS.graphContainer}>
//                 <canvas className={AnalyticsCSS.graph} id="salesGraph"></canvas>
//               </div>
//             </div>
//             <div className={AnalyticsCSS.btndiv}>
//               <button
//                 type="button"
//                 className={`btn btn-outline-danger ${AnalyticsCSS.viewprobtnproductselector}`}
//                 onClick={handleViewAllClick}
//               >
//                 View all
//               </button>
//             </div>
//           </div>
//         </div>

//         <div style={containerStyle}>
//           <div style={cardStyle}>
//             <table style={tableStyle}>
//               <tbody>
//                 <tr>
//                   <td>Total Sales:</td>
//                   <td>overAllSales</td>
//                 </tr>
//                 <div style={line}></div>
//                 <tr>
//                   <td>Total Items Sold:</td>
//                   <td>
//                     {analyticsData && ordersForPredictedProduct ? (
//                       <>{ordersForPredictedProduct}</>
//                     ) : (
//                       <p></p>
//                     )}
//                   </td>
//                 </tr>
//                 <div style={line}></div>
//                 <tr>
//                   <td>Current Price:</td>
//                   <td>
//                     {analyticsData && analyticsData.product ? (
//                       <>{analyticsData.product.price}</>
//                     ) : (
//                       <p>$5000</p>
//                     )}
//                   </td>
//                 </tr>
//                 <div style={line}></div>
//                 <tr>
//                   <td>AI Predicted Best Price:</td>
//                   <td>$45</td>
//                 </tr>
//                 <div style={line}></div>
//               </tbody>
//             </table>
//           </div>

//           <div style={cardStyle}>
//             <button style={buttonStyle} onClick={handlePredictionGeneration}>
//               Generate AI Prediction
//             </button>
//           </div>
//         </div>

//         <Modal show={showModal} onHide={handleModalClose} size="xl">
//           <Modal.Header closeButton>
//             <Modal.Title>All Products</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Analyticsproduct setAnalyticsData={setAnalyticsData} />
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleModalClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Components/sidebar";
import AnalyticsCSS from "./Analytics.module.css";
import Analyticsproduct from "../Components/product listing/Analyticsproduct";
import axios from "axios";
import { toast } from "react-toastify";

export default function Analytics() {
  const [showModal, setShowModal] = useState(false);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [ordersForPredictedProduct, setordersForPredictedProduct] = useState(0);

  const handlePredictionGeneration = () => {
    alert(
      "AI prediction generated! Here are some suggestions to increase sales."
    );
  };

  const containerStyle = {
    margin: "30px",
    padding: "1rem",
  };

  const line = {
    marginBottom: "15px",
    width: "100%",
    backgroundColor: "#ddd",
    height: "1px",
    margin: "10px 0",
  };

  const cardStyle = {
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1rem",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const tableHeaderStyle = {
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "0.75rem",
    textAlign: "left",
  };

  const tableDataStyle = {
    padding: "0.75rem",
    borderBottom: "1px solid #ddd",
  };

  const buttonStyle = {
    backgroundColor: "#1e8354",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getOrdersOfPredictedProduct = async (productId) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/orders/product/${productId}`
      );
      if (response.status === 200) {
        setordersForPredictedProduct(response.data);
        toast.success("Orders fetched successfully!");
      } else {
        toast.error("Failed to fetch orders. Please try again.");
      }
      return response.data;
    } catch (error) {
      console.log(
        "Failed to fetch orders:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (analyticsData.product) {
      getOrdersOfPredictedProduct(analyticsData?.product?._id)
        .then((orders) => {
          setordersForPredictedProduct(orders?.length || 0);
        })
        .catch((error) => {
          // Handle the error if needed
          setordersForPredictedProduct(0);
        });
    }
    const ctx = document.getElementById("salesGraph");
    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Sales",
            data: [],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });

    return () => chartInstance.destroy();
  }, [analyticsData]);

  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);

  return (
    <div
      className="container"
      style={{ width: "100%", margin: "0", padding: "0px", maxWidth: "100%" }}
    >
      <Sidebar />
      <main style={{ margin: "10px" }}>
        <h4 className={AnalyticsCSS.analyticheading}>
          Analytics and Recommendations
        </h4>
        <div className={AnalyticsCSS.livedatesection}>
          <p>{currentDate.toLocaleDateString("en-US", options)}</p>
        </div>
        <div className={AnalyticsCSS.productselectsection}>
          <div className={AnalyticsCSS.selectproductbox}>
            <div className={AnalyticsCSS.boxdivproductselecter}>
              <h3>
                {analyticsData && analyticsData.product
                  ? "Selected Product"
                  : "Select Product"}
              </h3>
              <h4 style={{ color: "#4bc0c0" }}>
                {analyticsData && analyticsData.product ? (
                  `${analyticsData.product.name}`
                ) : (
                  <>Product not selected</>
                )}
              </h4>
            </div>
            <div className={AnalyticsCSS.productselectslider}>
              <div className={AnalyticsCSS.graphContainer}>
                <canvas className={AnalyticsCSS.graph} id="salesGraph"></canvas>
              </div>
            </div>
            <div className={AnalyticsCSS.btndiv}>
              <button
                type="button"
                className={`btn btn-outline-danger ${AnalyticsCSS.viewprobtnproductselector}`}
                onClick={handleViewAllClick}
              >
                Click to view products for predictions
              </button>
            </div>
          </div>
        </div>

        <div style={containerStyle}>
          <div style={cardStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Metric</th>
                  <th style={tableHeaderStyle}>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableDataStyle}>Total Sales:</td>
                  <td style={tableDataStyle}>overAllSales - N/A</td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>Total Items Sold:</td>
                  <td style={tableDataStyle}>
                    {analyticsData && ordersForPredictedProduct}
                  </td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>Current Price:</td>
                  <td style={tableDataStyle}>
                    {analyticsData && analyticsData.product ? (
                      `$${analyticsData.product.price}`
                    ) : (
                      <>N/A</>
                    )}
                  </td>
                </tr>
                <tr>
                  <td style={tableDataStyle}>AI Prediction</td>
                  <td style={tableDataStyle}>
                    {
                      analyticsData && analyticsData.prediction
                        ? analyticsData.prediction === true
                          ? "Price Should Increase"
                          : "Price Should Decrease"
                        : "N/A" // Display "N/A" or any default value when `analyticsData` or `analyticsData.prediction` is not available
                    }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div style={cardStyle}>
            <button style={buttonStyle} onClick={handlePredictionGeneration}>
              Generate AI Prediction
            </button>
          </div> */}
        </div>

        <Modal show={showModal} onHide={handleModalClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>All Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Analyticsproduct
              setAnalyticsData={setAnalyticsData}
              onHide={handleModalClose}
            />
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
