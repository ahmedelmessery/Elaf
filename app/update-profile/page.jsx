'use client'
import UpdateProfile from '@/components/UpdateProfile'
import Link from 'next/link'
import React from 'react'

const UpdateProfileInfo = () => {
    return (
        <>
  <title>تعديل الحساب</title>

          <section className='profile m-auto py-5 h-[90vh] max-lg:h-auto' dir='rtl' >
            <div>
              <h1 className='font-bold text-2xl text-red text-center'>تعديل بيانات الحساب</h1>
              <hr className='mt-10'/>
            </div>
    
    
           
            <div className='flex justify-between items-center p-10 gap-20 max-sm:flex-col max-md:gap-10 max-md:py-2 w-6/12 max-sm:p-0 max-sm:items-start'>
              <div className="col flex flex-col items-start justify-center gap-10 border border-gray-300  w-12/12 xl:w-7/12  lg:w-6/12 p-10 sm:flex-wrap max-sm:items-center max-sm: max-md:gap-5 max-md:p-5 max-md:text-sm max-md:flex-row max-sm:mr-[30%]">
                <Link scroll={false} href={'/profile'} className='font-bold'><i className="fa-solid fa-user ml-2"></i> حسابي</Link>
                <Link scroll={false} href={'/orders'} className='text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-file-lines ml-2"></i> طلباتي</Link>
                <Link scroll={false} href={'/addresses'} className='text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-location-dot ml-2"></i> دليل العناوين</Link>
                
                <button type="button" className='text-red font-bold hover:mr-1  hover:scale-105 transition-all duration-300'><i className="fa-solid fa-right-from-bracket ml-2"></i>تسجيل الخروج</button>
              </div>
    
              <div className="col flex flex-col w-6/12">
                <UpdateProfile/>
              </div>
    
    
              
            </div>
          </section>
          <hr/>
        </>
      )
}

export default UpdateProfileInfo