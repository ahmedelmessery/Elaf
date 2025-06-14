import { cartContext } from '@/Context/cartContext'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'

const CartPrice = ({}) => {

  let {calculateTotalPrice , totalPrice,calculateDiscountPrice,discountPrice , cart} = useContext(cartContext)


    
    useEffect(() => {
      calculateTotalPrice();
      calculateDiscountPrice()
    }, [cart]);
  

  return (
    <div className='flex flex-col justify-start items-start gap-2 mt-10 max-md:m-auto' dir='rtl'>
        <div className='ml-auto'>
        <h1 className='text-gray-400 text-right'>هل لديك كود خصم؟</h1>
        </div>

        <div className='relative'>
        <input type="text" name="coupon" id="coupon" placeholder='اضف كود الخصم' className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' />
        <button type="button" className='text-red p-2 absolute left-0 text-sm font-bold'>تفعيل</button>
        </div>

        <div className='flex items-srart justify-between w-full border-b border-gray-300 pb-4 mt-2'>
          <h1 className='text-gray-400 font-bold'>تفاصيل السعر</h1>
          <h1 className='text-gray-400 font-bold'>{totalPrice} رس</h1>
        </div>
        
       
        <div className='flex flex-col items-srart justify-between w-full border-b border-gray-300 pb-4 gap-2'>
          <div className="flex items-srart justify-between">
          <h1 className='text-gray-400 font-bold text-sm'>الخصم</h1>
          <h1 className='text-gray-400 font-bold text-sm'>{discountPrice} رس</h1>
          </div>
          <div className="flex items-srart justify-between">
          <h1 className='text-gray-400 font-bold text-sm'>المدفوع</h1>
          <h1 className='text-gray-400 font-bold text-sm'>{totalPrice - discountPrice} رس</h1>
          </div>
        </div>
        
        <div className='flex items-srart justify-between w-full border-b border-gray-300 pb-4 mt-2'>
          <h1 className='font-bold'>الاجمالي</h1>
          <h1 className='text-gray-500 font-bold'>{totalPrice - discountPrice} رس</h1>
        </div>

        <div className='flex flex-col items-srart justify-between w-full mt-2 gap-2'>
          <h1 className='text-gray-500 font'>اكتب ملاحظة لمندوب التوصيل</h1>
          <textarea name="" id="" cols="30" rows="10" draggable='false'   className=' bg-gray-100 resize-none overflow-hidden outline-none w-[21rem] p-2 h-20 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '></textarea>
        </div>
        
        <div className='w-auto mt-6  max-sm:m-auto  max-sm:mt-10'>
        <Link scroll={false} href={'/cart/shipping'} className='bg-red text-white font-bold px-24  py-2 rounded shadow-sm   hover:shadow-md transition duration-200 max-sm:px-10'>تابع عملية الشراء</Link>
        </div>
      
    </div>
  )
}

export default CartPrice