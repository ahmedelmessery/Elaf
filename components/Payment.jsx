"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import ShippingAddressCard from './ShippingAddressCard'
import { ConfigProvider, Radio } from 'antd'
import Image from 'next/image'
import { cartContext } from '@/Context/cartContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const Payment = () => {
  const router = useRouter()
  const {orderCode , orderAddress , PostOrder} = useContext(cartContext)


  const [value, setValue] = useState(2);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  

  


  return (
    <div className='flex flex-col justify-start items-start gap-2 mt-10 max-md:m-auto' dir='rtl'>
    <div className='ml-auto'>
    <h1 className='text-red font-bold text-right text-lg'>بيانات الشحن</h1>
    </div>

    <div className='relative mt-4'>
    <h1 className='font-bold text-right'>عنوان الشحن</h1>
    <div className='w-[350px] flex- justify-start items-start mt-4 '>
    <ShippingAddressCard />
    </div>
    </div>

    <div className='ml-auto mt-6'>
    <h1 className=' font-bold text-right'>طريقة الدفع او السداد</h1>
    </div>



    <Radio.Group className='flex flex-col gap-4' onChange={onChange} value={value}>
  <Radio value={1} className="radio-custom">
    <div className={`w-[21rem] max-sm:w-[14rem] p-2 flex justify-between items-center ${value === 1 ? 'border border-gray-300' : ''}`}>
      <Image src={'/visa.png'} width={50} height={50} alt='visa' className='object-contain'/>
      <p className={`${value===1?'text-black':'text-gray-500'} font-bold text-xs`}>الدفع باستخدام فيزا</p>
      {value === 1 ?
      <>
       <Image src={'/red-tick.png'} width={15} height={15} alt='selected' className='object-contain' />
       </>
       : ''}
    </div>
  </Radio>
  <Radio value={2} className="radio-custom">
    <div className={`flex justify-start items-center gap-10 p-2 max-sm:w-[18rem]   ${value === 2 ? 'border border-gray-300' : ''}`}>
      <p className={`${value===2?'text-black':'text-gray-500 '} font-bold text-xs max-sm:text-[10px]`}>الدفع عند الاستلام </p>
      {value === 2 ?
      <>
       <p className='text-red font-bold text-xs max-sm:text-[10px]'>50 رس مصاريف اضافية</p> 
       <Image src={'/red-tick.png'} width={15} height={15} alt='selected' className='object-contain' />
       </>
       : ''}
    </div>
  </Radio>
</Radio.Group>

    <div className='w-[21rem] max-sm:w-[14rem]  m-auto flex justify-center max-sm:justify-between items-center mt-10   max-sm:mt-10'>
      
    <button onClick={PostOrder} type='submit' className='bg-red text-white font-bold px-24  py-2 rounded shadow-sm   hover:shadow-md transition duration-200 max-sm:px-10'>اتمام الدفع</button>
    </div>

    <div className='w-[21rem] max-sm:w-[17rem]  m-auto flex justify-between items-center mt-10   max-sm:mt-10'>
    <Link scroll={false} href={'/cart'} className='max-sm:text-xs text-xs font-bold px-24  py-2 hover:animate-pulse max-sm:px-10'>العودة الي عربة التسوق</Link>
    </div>
  
</div>
  )
}

export default Payment