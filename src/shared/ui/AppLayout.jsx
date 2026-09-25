// import React from 'react'
import Header from './Header'
import { useState } from 'react';
// import CartOverview from '../cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import SideMenu from './SideMenu';
import Loader from './Loader';
import Footer from './Footer';
export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
const [isOpenMenu,setIsOpen]=useState(false)
function handleClose()
{
setIsOpen(false)
}

function onMenuClick()
{
  setIsOpen(true)
}
  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      {isLoading && <Loader />}
<SideMenu isOpen={isOpenMenu}  onClose={handleClose}/>
      <Header onMenuClick={onMenuClick}/>
<main className="max-w-7xl mx-auto ">
  <Outlet />
</main>

      <Footer />
    </div>
  )
}