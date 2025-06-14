'use client'
import { cartContext } from '@/Context/cartContext'
import Cart from '@/components/Cart'
import Payment from '@/components/Payment'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const CartPayment = () => {
  const {GetCart , cart} = useContext(cartContext)
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
    <>
       <title>الدفع</title>

    <div className='flex flex-col' dir='rtl'>
      <div className='p-10 flex justify-start'>
        <h1 className='text-xl font-bold text-blue'>سلة التسوق</h1>
      </div>

      <div className='mx-20 text-sm border border-gray-300 font-bold h-10 flex justify-start gap-3 items-center px-5 max-md:justify-between max-md:gap-0  max-sm:text-xs'>
        <Link scroll={false} href={'/cart'} >السلة</Link>
        <Link scroll={false} href={'/cart/shipping'}>محتويات الشحن</Link>
        <Link scroll={false} href={'/cart/payment'}  className='text-red'>الدفع</Link>
      </div>

      <div className='flex max-lg:flex-col justify-between xl:justify-center  xl:gap-36 items-start mx-20 max-xl:mx-10 '>
          {cart?
            <>
            <Cart />
            <Payment />
            </>
          :
          <EmptyCart />
          }
      </div>
      
      <div className='flex justify-start items-center mx-20 max-lg:m-auto max-lg:mt-20'>
        <Link href={'/wishlist'} className='max-sm:px-3 max-sm:py-2 max-sm:text-xs px-6 py-3 text-sm text-gray-400 hover:text-black transition duration-300 bg-white border border-gray-300 font-bold'>تصفح المفضلة</Link>
      </div>
    </div>
</>
  )
}

export default CartPayment