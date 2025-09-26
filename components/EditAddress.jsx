'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const EditAddress = () => {

  const [mainAddressCountry , setMainAddressCountry] = useState('المملكة العربيية السعودية')
  const [mainAddressStreet , setMainAddressStreet] = useState('الرياض  حي الزهور')
  const [mainPhone , setMainPhone] = useState('+201096454566')


  const [shippingAddressCountry , setShippingAddressCountry] = useState('المملكة العربيية السعودية')
  const [shippingAddressStreet , setShippingAddressStreet] = useState('الرياض  حي الزهور')
  const [shippingPhone , setShippingPhone] = useState('+201096454566')



  return (
    <div dir='rtl border border-gray-300'>
      <div className='p-2 max-md:mt-10'>
        <Link scroll={false} className='font-semibold text-md text-gray-500 hover:text-black' href={'/addresses'}>رجوع للخلف</Link>
      </div>
    <div className='flex flex-col justify-between md:gap-5  max-md:justify-center   max-md:text-sm max-sm:items-center max-md:gap-5 max-md:py-5'>
        <div className='card max-md:border-b-2 shadow-sm max-md:shadow-none  md:border md:border-gray-300  rounded-2xl p-4  flex max-md:flex-col max-md:gap-5 max-sm:mr-14 items-center justify-between w-full'>
            <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold  lg:text-base'>العنوان الرئيسي </p>
            <input value={mainAddressCountry} onChange={(e)=> setMainAddressCountry(e.target.value)}  type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='mainAddressCountry'
            maxLength={30}
            />
            <input value={mainAddressStreet} onChange={(e)=> setMainAddressStreet(e.target.value)} type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='mainAddressStreet'
            maxLength={40}
            />
            <input value={mainPhone} onChange={(e)=> setMainPhone(e.target.value)}  type="tel" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-right text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='mainPhone'
            maxLength={20}
            />
            </div>

            <div className='flex items-center justify-end max-md:mt-4'>
              <button type="button" className='px-7 py-2 outline-none bg-red text-white rounded-md'>حفظ</button>
            </div>
        </div>

        
        <div className='card max-md:border-b-2 shadow-sm max-md:shadow-none  md:border md:border-gray-300  rounded-2xl p-4  flex max-md:flex-col max-md:gap-5 max-sm:mr-14 items-center justify-between w-full'>
            <div className='flex flex-col gap-2'>
            <p className='text-sm font-bold  lg:text-base'>عنوان الشحن</p>
            <input value={shippingAddressCountry} onChange={(e)=> setShippingAddressCountry(e.target.value)}  type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingAddressCountry'
            maxLength={30}
            />
            <input value={shippingAddressStreet} onChange={(e)=> setShippingAddressStreet(e.target.value)} type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingAddressStreet'
            maxLength={40}
            />
            <input value={shippingPhone} onChange={(e)=> setShippingPhone(e.target.value)}  type="tel" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-right text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
            autoComplete='shippingPhone'
            maxLength={20}
            />
            </div>

            <div className='flex items-center justify-end max-md:mt-4'>
              <button type="button" className='px-7 py-2 outline-none bg-red text-white rounded-md'>حفظ</button>
            </div>
        </div>

        


      </div>
      </div>
  )
}

export default EditAddress