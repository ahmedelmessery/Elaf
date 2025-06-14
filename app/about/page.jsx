'use client'
import { cartContext } from '@/Context/cartContext'
import AboutCard from '@/components/AboutCard'
import axios from 'axios'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const About = () => {
  const {isLoading , setIsLoading} = useContext(cartContext)
  const [about ,setAbout] = useState([])
  
  const getAbout = ()=>{
    setIsLoading(true)
    return axios.get('http://localhost:4000/api/v1/about')
    .then((response) => {
      setAbout(response.data.result)
      setIsLoading(false)
    })
    .catch((error)=> {
      console.log(error);
    })
  }


  useEffect(()=>{
    getAbout()
  },[])



  return (
    <>
       <title>من نحن</title>

    <section dir='rtl' className='about'>
      <div className='flex flex-col justify-between items-start max-md:py-10 px-10 py-20'>
          <h1 className='font-black text-2xl'>من نحن</h1>
          <span className='border-b-4 border-red w-10 mt-2'></span>
          
      <div className='flex flex-col justify-between items-center gap-28 mt-8 max-md:mt-15'>
      {about.map((item) => (
              <AboutCard key={item.id} item={item} />
            ))}
      </div>
      </div>
    </section>
    <hr/>
  </>
  )
}

export default About