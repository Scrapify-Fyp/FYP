import React from 'react'
// import  Navbar  from '../Components/Navbar'
import  Footer  from '../Components/Footer'

export default function Dashboard_Layout({ children }) {
  return (
    <div>
        <Navbar/>
            <main>
                {children}
                </main>
        <Footer/>
    </div>
  )
}
