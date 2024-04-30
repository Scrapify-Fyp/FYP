import React from 'react'
import Sidebar from "../Components/sidebar"
import { NavLink } from 'react-router-dom'
export default function Order_history() {
  return (
    <>  
    <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
            <Sidebar/>
            <main style={{margintop: '58px'}}>
            <div style={{ maxWidth: "100%", margin: "0 auto",padding:"20px 20px 20px 20px"  }}>
            <div style={{ maxWidth: "100%", margin: "0 auto", padding: "1rem" }}>
            <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1rem" }}>Order History</h1>




 {/*------------------ for buying items--------------- */}
        <div style={{ backgroundColor: "#534892", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                    <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Slim Fit Denim Jeans</h2></NavLink>
                        <p style={{ color:"white" }}>Buyer: John Doe</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $100</p>
                    <p style={{ color: "white" }}>Date & Time: 01/01/2022 10:00 AM</p>
                </div>
            </div>
        </div>




        {/*------------------ for Soldout items--------------- */}
        <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem" , marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>



              {/*------------------ for Soldout items--------------- */}
              <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem" , marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>



              {/*------------------ for Soldout items--------------- */}
              <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem"  }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>



              {/*------------------ for Soldout items--------------- */}
              <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem" , marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>

 {/*------------------ for buying items--------------- */}
 <div style={{ backgroundColor: "#534892", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                    <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Slim Fit Denim Jeans</h2></NavLink>
                        <p style={{ color:"white" }}>Buyer: John Doe</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $100</p>
                    <p style={{ color: "white" }}>Date & Time: 01/01/2022 10:00 AM</p>
                </div>
            </div>
        </div>

              {/*------------------ for Soldout items--------------- */}
              <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem"  }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>



              {/*------------------ for Soldout items--------------- */}
              <div style={{ backgroundColor: "#ea618c", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem"  }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                      <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Stylish Leather Jacket</h2></NavLink>
                        <p style={{ color: "white" }}>Sold to: Jane Smith</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $80</p>
                    <p style={{ color: "white" }}>Date & Time: 01/02/2022 3:00 PM</p>
                </div>
            </div>
        </div>

 {/*------------------ for buying items--------------- */}
 <div style={{ backgroundColor: "#534892", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                    <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Slim Fit Denim Jeans</h2></NavLink>
                        <p style={{ color:"white" }}>Buyer: John Doe</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $100</p>
                    <p style={{ color: "white" }}>Date & Time: 01/01/2022 10:00 AM</p>
                </div>
            </div>
        </div> {/*------------------ for buying items--------------- */}
        <div style={{ backgroundColor: "#534892", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                    <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Slim Fit Denim Jeans</h2></NavLink>
                        <p style={{ color:"white" }}>Buyer: John Doe</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $100</p>
                    <p style={{ color: "white" }}>Date & Time: 01/01/2022 10:00 AM</p>
                </div>
            </div>
        </div> {/*------------------ for buying items--------------- */}
        <div style={{ backgroundColor: "#534892", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src="https://placehold.co/50" alt="Product Image" style={{ height: "5rem", width: "5rem", objectFit: "cover", borderRadius: "0.5rem" }} />
                    <div style={{ marginLeft: "1rem" }}>
                    <NavLink style={{textDecoration:"none"}} to={"/ProductDetail"}>  <h2 style={{ fontSize: "1.125rem", fontWeight: "600",color: "white",cursor:"pointer" }}>Slim Fit Denim Jeans</h2></NavLink>
                        <p style={{ color:"white" }}>Buyer: John Doe</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: "white" }}>Price: $100</p>
                    <p style={{ color: "white" }}>Date & Time: 01/01/2022 10:00 AM</p>
                </div>
            </div>
        </div>

        
    </div>
</div>

            </main>
    </div>            
</>
  )
}
