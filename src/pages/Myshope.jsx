import React from 'react';
import profilecss from "./Profile.module.css";
import Sidebar from "../Components/sidebar";
import img from "../img/mandp.jpg";
import Shopepage from '../Components/Shopepage';

export default function Myshope() {
  return (
    <>  
      <div className={`${profilecss.bgWhite}`}>
        <Sidebar/>
        <main style={{ marginTop: '58px' }}>
          <Shopepage/>
        </main>
      </div>            
    </>
  );
}
