'use client'
import { useUserContext } from '@/Context/userContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const ProfileInfo = () => {
    const {fetchUserDetails , userDetails , fetchUserAddresses} = useUserContext()

    useEffect(()=> {
      fetchUserDetails()
    //   fetchUserAddresses()
    },[])


    



  return (
    <section dir='rtl'>
                  <div  className='px-20 py-6 max-sm:mr-6'>
            <h1 className='font-bold max-md:text-sm max-sm:w-80'>نظرة عامة حول الحساب</h1>
            </div>
        <div className='w-12/12 flex justify-evenly items-center max-lg:flex-col max-lg:justify-center max-lg:gap-10 gap-5 max-sm:mr-10'>
                <div className='flex flex-col justify-between items-start'>
                    <div className='border border-gray-300 flex justify-between items-center  rounded-t-2xl  max-lg:w-[300px] w-[400px] p-2'>
                        <p className='font-bold text-gray-500 text-sm'>تفاصيل الحساب</p>
                        <Link scroll={false} href={'/update-profile'}><i className="fa-solid fa-pen text-gray-500 hover:text-gray-700"></i></Link>
                    </div>
                    
                    <div className='flex flex-row justify-evenly items-center border border-gray-300 w-[400px]  max-lg:w-[300px] p-10 rounded-b-2xl'>
                                <div className='rounded-full overflow-hidden w-24 h-24'>
                                    {/* Adjust width and height to your preference */}
                                    <img
                                    id='profile-pic'
                                    src={'/profile-pic.jpg'}
                                    width={200}
                                    alt='profile-pic'
                                    className='object-cover'
                                    />
                                </div>
                        <div className="col flex flex-col justify-between items-start gap-2">
                            <h1 className='font-bold text-sm'>{userDetails?.name}</h1>
                            <h3 dir='ltr' className='font-bold text-sm'>{userDetails?.userPhones[0]}</h3>
                        </div>
                    </div>


                    <div className='border border-red mt-8'>
                       <Link scroll={false} href={'/update-profile'}><button  type="button" className='bg-white text-red hover:bg-red duration-300 transition hover:text-white w-[400px] max-lg:w-[300px] py-2 font-bold'>تعديل بيانات الحساب</button></Link> 
                    </div>
                </div>





                <div className='flex flex-col justify-between items-start'>
                    <div className='border border-gray-300 flex flex-row justify-between items-center rounded-t-2xl  max-lg:w-[300px] w-[400px] p-2'>
                        <p className='font-bold text-gray-500 text-sm'>العنوان الرئيسي</p>
                        <Link scroll={false} href={'/update-addresses'}><i className="fa-solid fa-pen text-gray-500 hover:text-gray-700"></i></Link>
                    </div>
                    
                    <div className='flex flex-row justify-between items-center border border-gray-300  w-[400px] max-lg:w-[300px] p-16 rounded-b-2xl'>
                        <div className="col flex flex-col justify-between items-start gap-2">
                            
                            <h1 className='font-bold text-sm'>المملكة العربية السعودية</h1>
                            <h3 className='font-bold text-sm'>الرياض  حي الزهور</h3>
                        </div>
                    </div>

                    <div className='border border-red mt-8'>
                        <Link scroll={false} href={'/new-address'}><button type="button" className='bg-white text-red hover:bg-red duration-300 transition hover:text-white w-[400px]  max-lg:w-[300px] py-2 font-bold'>اضافة عنوان جديد</button></Link>
                    </div>
                </div>



        </div>
    </section>
  )
}

export default ProfileInfo