import React from 'react'
import Sidebar from "../Components/sidebar"
import "./Wallet.css";
export default function Wallet() {
  return (
    <div className="main-container" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
      <Sidebar />
      <main className="main-content">
        <div className="inner-container">
          <h1>My Payment Options</h1>
          <div className="payment-options">
            <div className="payment-option">
              <h2>Bank Account</h2>
              <button className="action-button">Add Bank Account</button>
            </div>
            <div className="payment-option">
              <h2>Digital Wallet</h2>
              <div className="wallet-options">
                <div className="wallet-option">
                  <h3>Easypaisa</h3>
                  <p>EasyPaisa account is required</p>
                </div>
                <div className="wallet-option">
                  <h3>JazzCash</h3>
                  <p>JazzCash account is required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
