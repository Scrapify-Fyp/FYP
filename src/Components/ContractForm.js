// import React, { useEffect, useState } from "react";
// import { jsPDF } from "jspdf";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useLocation } from "react-router-dom";
// import { auth } from "../hooks/auth";
// import axios from "axios";

// const ContractForm = () => {
//   const user = auth();
//   console.log("USer", user);
//   const location = useLocation();
//   const data = location.state;
//   const [product, setProduct] = useState(data);
//   console.log("PRoducts: ", product);
//   const [buyerName, setBuyerName] = useState(
//     user?.firstName + " " + user?.lastName
//   );
//   const [sellerName, setSellerName] = useState("");
//   const [productName, setProductName] = useState(product?.name);
//   const [contractDate, setContractDate] = useState("");
//   const [duration, setDuration] = useState("");
//   const [vendor, setVendor] = useState("");

//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.text("Contract Agreement", 20, 20);
//     doc.text(`Buyer Name: ${buyerName}`, 20, 30);
//     doc.text(`Seller Name: ${sellerName}`, 20, 40);
//     doc.text(`Product Name: ${productName}`, 20, 50);
//     doc.text(`Contract Date: ${contractDate}`, 20, 60);
//     doc.text(`Duration: ${duration} months`, 20, 70);

//     doc.save("contract.pdf");
//   };

//   useEffect(() => {
//     getvendor();
//   });
//   const getvendor = async () => {
//     const response = await axios.get(
//       `${process.env.REACT_APP_BASE_URL}/users/${product?.vendorId}`
//     );
//     console.log("response;", response);
//     setVendor(response.data);
//     setSellerName(response?.data?.firstName + " " + response?.data?.lastName);
//   };
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Contract Form</h2>
//       <form>
//         <div className="form-group mb-3">
//           <label htmlFor="buyerName">Buyer Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="buyerName"
//             value={buyerName}
//             onChange={(e) => setBuyerName(e.target.value)}
//             placeholder="Enter buyer's name"
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="sellerName">Seller Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="sellerName"
//             value={sellerName}
//             onChange={(e) => setSellerName(e.target.value)}
//             placeholder="Enter seller's name"
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="productName"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             placeholder="Enter product name"
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="contractDate">Contract Date</label>
//           <input
//             type="date"
//             className="form-control"
//             id="contractDate"
//             value={contractDate}
//             onChange={(e) => setContractDate(e.target.value)}
//           />
//         </div>
//         <div className="form-group mb-3">
//           <label htmlFor="duration">Duration (months)</label>
//           <input
//             type="number"
//             className="form-control"
//             id="duration"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             placeholder="Enter contract duration in months"
//           />
//         </div>
//         <button type="button" className="btn btn-primary" onClick={generatePDF}>
//           Save as PDF
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContractForm;

import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { auth } from "../hooks/auth";
import axios from "axios";

const ContractForm = () => {
  const user = auth();
  const location = useLocation();
  const data = location.state;
  const [product, setProduct] = useState(data);
  const [buyerName, setBuyerName] = useState(
    user?.firstName + " " + user?.lastName
  );
  const [sellerName, setSellerName] = useState("");
  const [productName, setProductName] = useState(product?.name);
  const [contractStartDate, setContractStartDate] = useState("");
  const [contractEndDate, setContractEndDate] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    if (product?.vendorId) {
      getVendor();
    }
  }, [product?.vendorId]);

  const getVendor = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${product?.vendorId}`
      );
      setSellerName(response.data.firstName + " " + response.data.lastName);
    } catch (error) {
      console.error("Error fetching vendor:", error);
    }
  };

  const calculateDuration = () => {
    if (contractStartDate && contractEndDate) {
      const start = new Date(contractStartDate);
      const end = new Date(contractEndDate);
      const diffInTime = end.getTime() - start.getTime();
      const diffInMonths = Math.ceil(diffInTime / (1000 * 60 * 60 * 24 * 30));
      setDuration(diffInMonths);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Title
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Contract Agreement", 20, 20);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
  
    // Add a line separator
    doc.setLineWidth(1.5);
    doc.line(20, 25, 190, 25);
  
    // Add spacing
    let yOffset = 30;
  
    // Introduction
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      "This Contract Agreement is made and entered into as of the date of signing, between the Buyer and Seller. The purpose of this agreement is to formalize the transaction of the product described below.",
      20,
      yOffset,
      { maxWidth: 170 }
    );
    yOffset += 20;
  
    // Buyer Information
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Buyer Information", 20, yOffset);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    yOffset += 10;
    doc.text(`Buyer Name: ${buyerName}`, 20, yOffset);
    yOffset += 10;
  
    // Seller Information
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Seller Information", 20, yOffset);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    yOffset += 10;
    doc.text(`Seller Name: ${sellerName}`, 20, yOffset);
    yOffset += 10;
  
    // Product Information
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Product Information", 20, yOffset);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    yOffset += 10;
    doc.text(`Product Name: ${productName}`, 20, yOffset);
    yOffset += 10;
  
    // Contract Dates
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Contract Dates", 20, yOffset);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    yOffset += 10;
    doc.text(`Contract Start Date: ${contractStartDate}`, 20, yOffset);
    yOffset += 10;
    doc.text(`Contract End Date: ${contractEndDate}`, 20, yOffset);
    yOffset += 10;
  
    // Duration
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Contract Duration", 20, yOffset);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    yOffset += 10;
    doc.text(`Duration: ${duration} months`, 20, yOffset);
    yOffset += 20;
  
    // Add a line separator
    doc.setLineWidth(1.5);
    doc.line(20, yOffset, 190, yOffset);
  
    // Footer
    yOffset += 10;
    doc.setFontSize(10);
    doc.text(
      "This agreement is executed on the date mentioned above and is binding upon the parties. It signifies mutual consent to the terms and conditions set forth in this contract.",
      20,
      yOffset,
      { maxWidth: 170 }
    );
    yOffset += 20;
    doc.text("Signature of Buyer: ___________________", 20, yOffset);
    yOffset += 10;
    doc.text("Signature of Seller: ___________________", 20, yOffset);
  
    // Save the PDF
    doc.save(`${buyerName}+${sellerName}+${productName}.pdf`);
  };
  
  
  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Contract Form</h2>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="buyerName">Buyer Name</label>
          <input
            type="text"
            className="form-control"
            id="buyerName"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            placeholder="Enter buyer's name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="sellerName">Seller Name</label>
          <input
            type="text"
            className="form-control"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            placeholder="Enter seller's name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            gap:"50px"
        }}>
          <div className="form-group mb-3">
            <label htmlFor="contractStartDate">Contract Start Date</label>
            <input
              type="date"
              className="form-control"
              id="contractStartDate"
              value={contractStartDate}
              onChange={(e) => {
                setContractStartDate(e.target.value);
                calculateDuration();
              }}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="contractEndDate">Contract End Date</label>
            <input
              type="date"
              className="form-control"
              id="contractEndDate"
              value={contractEndDate}
              onChange={(e) => {
                setContractEndDate(e.target.value);
                calculateDuration();
              }}
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={generatePDF}>
          Save as PDF
        </button>
      </form>
    </div>
  );
};

export default ContractForm;
