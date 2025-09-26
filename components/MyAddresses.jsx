import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MyAddresses = ({address}) => {
  return (
    <div dir='rtl border border-gray-300'>
    <div className='flex flex-col justify-between md:gap-5 max-md:flex-col max-md:justify-center   max-md:text-sm max-sm:items-center max-md:gap-5 max-md:py-5'>
        <div className='card max-md:border-b-2 shadow-sm max-md:shadow-none  md:border md:border-gray-300  rounded-2xl p-4 max-sm:mr-14 flex items-center justify-between w-full'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-bold  lg:text-base'>العنوان الرئيسي </p>
              <p className='text-sm font-bold text-gray-500'>المملكة العربيية السعودية</p>
              <p className='text-sm font-bold text-gray-500'>الرياض  حي الزهور</p>
              <p className='text-sm font-bold text-gray-500'>201096454566+</p>
            </div>
            <div className='flex items-center justify-end max-md:mt-4'>
              <Link scroll={false} href={'/update-addresses'}><i className="fa-solid fa-pen text-gray-500 hover:text-gray-700"></i></Link>
            </div>
        </div>


        <div className='card max-md:border-b-2 shadow-sm max-md:shadow-none  md:border md:border-gray-300  rounded-2xl p-4 max-sm:mr-14 flex items-center justify-between w-full'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-bold  lg:text-base'>عنوان الشحن</p>
              <p className='text-sm font-bold text-gray-500'>المملكة العربيية السعودية</p>
              <p className='text-sm font-bold text-gray-500'>الرياض  حي الزهور</p>
              <p className='text-sm font-bold text-gray-500'>201096454566+</p>
            </div>
            <div className='flex items-center justify-end max-md:mt-4'>
              <Link scroll={false} href={'/update-addresses'}><i className="fa-solid fa-pen text-gray-500 hover:text-gray-700"></i></Link>
            </div>
        </div>


        <div className='md:p-10 m-auto max-sm:my-4'>
        <Link scroll={false} href={'/new-address'}><button type="button" className='bg-white text-red hover:bg-red duration-300 transition border border-red hover:text-white w-[400px]  max-lg:w-[300px] py-2 font-bold max-sm:text-sm'>اضافة عنوان جديد</button></Link>
        </div>
    </div>
    </div>
  )
}

export default MyAddresses