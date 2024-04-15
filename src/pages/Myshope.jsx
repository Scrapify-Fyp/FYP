import React from 'react'
import profilecss from "./Profile.module.css"
import Sidebar from "../Components/sidebar"
export default function Myshope() {
  return (
    <>  
        <div className="" style={{width: "100%", margin: "0", padding: "0px", maxWidth: "100%"}}>
                <Sidebar/>
                <main style={{margintop: '58px'}}>
                    <div className={`${profilecss.container} pt-4`}>
                       <h1>I am Shope page and In progress...</h1>
                    </div>
                </main>
        </div>            
    </>
  )
}
