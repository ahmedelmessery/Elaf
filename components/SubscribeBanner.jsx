'use client'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SubscribeBanner = () => {
  let[email , setEmail] = useState('')

  const Subscribe = (e)=>{
    e.preventDefault();
    return axios.post('/subscriptions',{
      email: email
    })
    .then(res=> {
      console.log(res);
      toast.success('Subscribed Successfully')
      setEmail('')
    })
    .catch(err => {
      err;
      toast.error('Please Try Again Later')
    })
  }



  return (
    <section className='relative'>
    <div className='subscribe-banner' dir='rtl' >
            <h1 className='text-white font-bold sm:text-2xl lg:text-4xl text-center mt-12'>اشترك للحصول علي خصومات تصل ل 25%</h1>  
            <div className='flex justify-center items-center gap-5 mt-12 max-sm:flex-col'>
                <div>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" className='text-white bg-transparent outline-none px-10 py-4 max-lg:px-6 max-lg:py-2 max-sm:w-52 max-md:placeholder:text-sm border-2 w-96 placeholder:text-white' placeholder='ادخل بريدك الالكتروني' />
                </div>

                <div>
                    <button onClick={Subscribe} type="submit" className='bg-white text-red font-bold text-sm px-9 py-5 rounded max-lg:px-7 max-lg:py-3 subscribe-btn'>اشتراك</button>
                </div>
            </div>
    </div>
   </section>
  )
}

export default SubscribeBanner