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
// import Navbar from '../Components/Navbar';
import Sidebar from '../Components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile_Layout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        {/* <Navbar /> */}
        <main className="container-fluid">
          {children}
        </main>
      </div>
    </div>
  );
}
