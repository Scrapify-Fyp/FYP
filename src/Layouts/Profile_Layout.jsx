import React from 'react'
import  Navbar  from '../Components/Navbar'
import  Sidebar  from '../Components/sidebar'

export default function Profile_Layout({ children }) {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <main>
                {children}
        </main>
    </div>
  )
}
