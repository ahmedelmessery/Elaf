import Image from 'next/image'
import React from 'react'

const EmptyOrders = () => {

    
  return (
    <div className='flex flex-col justify-center items-center gap-7 mt-32 m-auto' dir='rtl'>
    <Image src={'/empty-orders.png'} width={50} height={50} alt='empty' className='object-contain' />
    
    <h1 className='text-3xl font-bold'>لا يوجد طلبات</h1>
    
</div>
  )
}

export default EmptyOrders