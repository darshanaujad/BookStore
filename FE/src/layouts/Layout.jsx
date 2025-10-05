import React from 'react'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full h-full flex flex-col '>
        <SideBar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout
