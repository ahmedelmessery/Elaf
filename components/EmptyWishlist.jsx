import Image from 'next/image'
import React from 'react'

const EmptyWishlist = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-7' dir='rtl'>
    <Image src={'/empty-wishlist.png'} width={300} height={300} alt='success' className='object-contain' />
    
    <h1 className='text-3xl font-bold text-center max-sm:text-lg'>لا يوجد شئ في المفضلة</h1>
    
</div>
  )
}

export default EmptyWishlist