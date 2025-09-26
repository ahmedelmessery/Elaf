import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const EmptyCart = () => {
  const router = useRouter(); 
  
  const handleContinueShopping = () => {
    router.push('/'); 
  }
    
  return (
    <div className='flex flex-col justify-center items-center gap-7 mt-10 max-sm:mt-20' dir='rtl'>
    <Image src={'/empty-cart.png'} width={300} height={300} alt='success' className='object-contain max-sm:w-32 max-sm:h-32' />
    
    <h1 className='text-3xl font-bold'>السلة فارغة !</h1>
    
    <div className='flex flex-row justify-center items-center gap-5 max-sm:flex-col'>
        <button type="button" className='bg-red text-white font-bold px-16 py-3 max-sm:px-10 max-sm:py-2 hover:shadow-md'>تتبع طلبك</button>
        <button onClick={handleContinueShopping} type="button" className='bg-white text-red border-red border font-bold px-16 py-3 max-sm:px-10 max-sm:py-2 hover:shadow-md'>تابع التسوق</button>
    </div>
</div>
  )
}

export default EmptyCart