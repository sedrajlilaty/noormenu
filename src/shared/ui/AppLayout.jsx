// import React from 'react'
import Header from './Header'
// import CartOverview from '../cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Footer from './Footer';
export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      {isLoading && <Loader />}

      <Header />

      <main className="flex-1 w-full">
<div className="main-container space-y-6">          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}