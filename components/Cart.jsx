'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import CartCardItem from './CartCardItem'
import EmptyCart from './EmptyCart'
import { useRouter } from 'next/navigation'
import { cartContext } from '@/Context/cartContext'
import Spiner from './Spiner'

const Cart = () => {

    const {GetCart , cart , isLoading} = useContext(cartContext)
    const router = useRouter()
  
    useEffect(()=>{
        GetCart()
    },[])
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, []);
return (
    <div className='cart flex  flex-col py-10 max-md:m-auto gap-5 max-md:gap-3' dir='rtl'>


       {cart?.map((product,index)=> <CartCardItem key={index} product={product} />)}
        

    </div>
)
}

export default Cart