import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart, selectCartItems } from "../redux/cart/cartSlice";

function OrderConfirmationPage() {
  const location = useLocation();
  const order = location.state?.order;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartItems);

  const copyOrderIdToClipboard = () => {
    navigator.clipboard.writeText(order.orderID);
    toast.success("Order ID copied to clipboard!");
  };

  // useEffect(() => {
    if (cartProducts.length <= 0) {
      
      navigate("/");
    }
    
  // }, [cartProducts, navigate]);
  
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
      {order ? (
        <div>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}>
            Your order has been placed successfully!
          </p>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
            Order ID: {order.orderID}
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
      ) : (
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          No order data found
        </p>
      )}
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
