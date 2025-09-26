'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import OrderCard from './OrderCard'

const MyOrders = ({orders}) => {
  
  return (
    <div dir='rtl border border-gray-300'>
      <div className='flex  justify-between md:gap-5 max-md:flex flex-col max-md:justify-center   max-md:text-sm max-sm:items-center max-md:gap-5 max-md:py-5'>
          {orders.map((order,index) => <OrderCard key={index}  order={order} />)}

        
      </div>
    </div>
  )
}

export default MyOrders