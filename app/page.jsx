'use client'
import { useUserContext } from '@/Context/userContext'
import BannerLanding from '@/components/BannerLanding'
import Banners from '@/components/Banners'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/BestProducts'
import LandingSlider from '@/components/LandingSlider'
import NewProducts from '@/components/NewProducts'
import RecentlyProducts from '@/components/RecentlyProducts'
import SubscribeBanner from '@/components/SubscribeBanner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '@/Context/cartContext'

const Home = () => {
  let {numOFItems , setnumOFItems ,getLoggedCart} = useContext(cartContext)
  const {fetchUserDetails , userId} = useUserContext()
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.getItem('userId')
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    fetchUserDetails()
    getLoggedCart()
  }, []);



  return (
    <div>

        <title>ＥＬＡＦ</title>

      
      
      


        <LandingSlider/>
        <Categories/>
        <Banners />
        <FeaturedProducts/>
        <BannerLanding/>
        <RecentlyProducts/>
        <NewProducts/>
        <SubscribeBanner/>
    </div>
  )
}

export default Home