import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />    {/*here pages will change dynamically but header and footer will stay as it is*/}
      <Footer />
    </>
  )
}

export default Layout