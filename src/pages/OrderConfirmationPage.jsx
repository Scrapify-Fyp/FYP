import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart, selectCartItems } from "../redux/cart/cartSlice";

function OrderConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartItems);

  const [orderID, setOrderID] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const orderIdFromUrl = searchParams.get("orderID");
    // console.log("aaaaaaaaaaaaaaaaaa",orderIdFromUrl);
    
    if (orderIdFromUrl) {
      setOrderID(orderIdFromUrl);
    } else {
      // Handle case where orderID is not found in URL
      navigate("/"); // Redirect to home or handle as needed
    }
  }, [location.search, navigate]);

  const copyOrderIdToClipboard = () => {
    if (orderID) {
      navigator.clipboard.writeText(orderID);
      toast.success("Order ID copied to clipboard!");
    }
  };

  if (!orderID) {
    // Render nothing or redirect if orderID is not available
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Order Confirmation
      </h2>
      <div>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Your order has been placed successfully!
        </p>
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>
          Order ID: {orderID}
        </p>
        <button
          className="btn btn-primary"
          style={{
            marginTop: "20px",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={copyOrderIdToClipboard}
        >
          Copy Order ID
        </button>
      </div>
      <button
        className="btn btn-outline-primary mt-3"
        style={{
          borderRadius: "5px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#007bff",
          border: "2px solid #007bff",
          cursor: "pointer",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onClick={() => {
          dispatch(emptyCart());
          navigate("/");
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderConfirmationPage;
