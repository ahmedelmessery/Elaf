'use client'
import AddAddress from '@/components/AddAddress'
import Link from 'next/link'
import React from 'react'

const AddNewAddress = () => {
    return (
        <>
            <title>اضافة عنوان جديد</title>

          <section className='profile m-auto py-5 h-auto' dir='rtl' >
            <div>
              <h1 className='font-bold text-2xl text-red text-center'>اضافة عنوان جديد</h1>
              <hr className='mt-10'/>
            </div>
    
    
           
            <div className='flex justify-between items-start p-10 gap-20 max-sm:flex-col max-md:gap-10 max-md:py-2'>
              <div className="col flex flex-col items-start justify-center gap-10 border border-gray-300 mt-14 w-2/12 max-md:w-3/12  p-10 max-sm:flex-row max-sm:flex-wrap max-sm:w-full ">
              {/* <div className="col flex flex-col items-start justify-center gap-10 border border-gray-300 mt-14 w-4/12 xl:w-3/12 md:w-5/12 lg:w-6/12  p-10 max-sm:flex-row max-sm:flex-wrap max-sm:w-full "> */}
                <Link scroll={false} href={'profile'} className=' text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-user ml-2"></i> حسابي</Link>
                <Link scroll={false} href={'/orders'} className='text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-file-lines ml-2"></i> طلباتي</Link>
                <Link scroll={false} href={'/addresses'} className='font-bold'><i className="fa-solid fa-location-dot ml-2"></i> دليل العناوين</Link>
                
                <button type="button" className='text-red font-bold hover:mr-1  hover:scale-105 transition-all duration-300'><i className="fa-solid fa-right-from-bracket ml-2"></i>تسجيل الخروج</button>
              </div>
    
              <div className="col flex flex-col w-10/12">
                <AddAddress />
              </div>
    
    
              
            </div>
          </section>
          <hr/>
        </>
      )
}

export default AddNewAddress