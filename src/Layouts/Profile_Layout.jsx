// import React from 'react'
// import  Navbar  from '../Components/Navbar'
// import  Sidebar  from '../Components/sidebar'

// export default function Profile_Layout({ children }) {
//   return (
//     <div>
//         <Navbar/>
//         <Sidebar/>
//         <main>
//                 {children}
//         </main>
//     </div>
//   )
// }


import React from 'react';
import Sidebar from '../Components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile_Layout.css'; // Assuming this file is used for general layout styles

export default function Profile_Layout({ children }) {
  return (
    <div className="d-flex flex-column flex-lg-row">
      <Sidebar />
      <div className="flex-grow-1">
        <main className="container-fluid">
          {children}
        </main>
      </div>
    </div>
  );
}
