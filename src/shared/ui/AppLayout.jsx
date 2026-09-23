// import React from 'react'
import Header from './Header'
// import CartOverview from '../cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Footer from './Footer';

export default function AppLayout() {
  const navigation = useNavigation();
  
  
  const isLoading = navigation.state === 'loading';
  
  console.log('Navigation state:', navigation.state);
  console.log('Is loading:', isLoading);

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
      {isLoading && <Loader/>}
      <Header/>
      <div className='overflow-scroll my-2'>
        <main className='max-w-3xl mx-auto'>
          <Outlet/>
        </main>
      </div>
      <Footer/>
      {/* <CartOverview/> */}
    </div>
  )
}