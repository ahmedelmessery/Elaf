'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const AddAddress = () => {

  const [shippingAddressCountry , setShippingAddressCountry] = useState('')
  const [shippingAddressStreet , setShippingAddressStreet] = useState('')
  const [shippingPhone , setShippingPhone] = useState('')



  return (
    <div dir='rtl border border-gray-300'>
      <div className='p-2 max-md:mt-10'>
        <Link scroll={false} className='font-semibold text-md text-gray-500 hover:text-black' href={'/addresses'}>رجوع للخلف</Link>
      </div>
    <div className='flex flex-col justify-between md:gap-5  max-md:justify-center   max-md:text-sm max-sm:items-center max-md:gap-5 max-md:py-5'>
  
        <div className='card flex-col max-md:border-b-2 shadow-sm max-md:shadow-none   rounded-2xl p-4  flex max-md:flex-col gap-5 max-sm:mr-14 items-start justify-between w-full'>
            <div className='flex flex-col gap-2'>
            {/* <p className='text-sm font-bold  lg:text-base'>عنوان الشحن</p> */}
            <input value={shippingAddressCountry} onChange={(e)=> setShippingAddressCountry(e.target.value)}  type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingAddressCountry'
            placeholder='العنوان'
            maxLength={30}
            />
            <input value={shippingAddressStreet} onChange={(e)=> setShippingAddressStreet(e.target.value)} type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingAddressStreet'
            placeholder='الحي'
            maxLength={40}
            />
            <input value={shippingPhone} onChange={(e)=> setShippingPhone(e.target.value)}  type="tel" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-right text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingPhone'
            placeholder='رقم الموبايل'
            maxLength={20}
            />
            </div>

            <div className='flex items-center justify-end max-md:mt-4'>
              <button type="button" className='px-7 py-2 outline-none bg-red text-white rounded-md'>اضافة</button>
            </div>
        </div>

        


      </div>
      </div>
  )
}

export default AddAddress