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
    <div>
      {isLoading && <Loader />}
      <Header />
   <main className="max-w-6xl mx-auto w-full px-4 md:px-8">
  <Outlet />
</main>
      <Footer />
    </div>
  )
}