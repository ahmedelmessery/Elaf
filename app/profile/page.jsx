'use client'
import { useUserContext } from '@/Context/userContext'
import ProfileInfo from '@/components/ProfileInfo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Profile = () => {
  const {logout , getAddress} = useUserContext()
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  useEffect(()=> {
    getAddress()
  },[])


  return (
    <>
    
       <title>الحساب</title>

      <section className='profile m-auto p-10 h-[90vh] max-lg:h-auto' dir='rtl' >
        <div>
          <h1 className='font-bold text-2xl text-red text-center'>حسابي الشخصي</h1>
          <hr className='mt-10'/>
        </div>


       
        <div className='flex justify-between items-start p-10 gap-20 max-sm:flex-col max-md:gap-10 max-md:py-2'>
          <div className="col flex flex-col items-start justify-center gap-10 border border-gray-300 mt-14 w-4/12 xl:w-3/12 md:w-5/12 lg:w-6/12  p-10 max-sm:flex-row max-sm:flex-wrap max-sm:w-full ">
            <Link scroll={false} href={'profile'} className=' font-bold'><i className="fa-solid fa-user ml-2"></i> حسابي</Link>
            <Link scroll={false} href={'/orders'} className='text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-file-lines ml-2"></i> طلباتي</Link>
            <Link scroll={false} href={'/addresses'} className='text-gray-500 font-bold hover:text-black'><i className="fa-solid fa-location-dot ml-2"></i> دليل العناوين</Link>
            
            <button onClick={logout} type="submit" className='text-red font-bold hover:mr-1  hover:scale-105 transition-all duration-300'><i className="fa-solid fa-right-from-bracket ml-2"></i>تسجيل الخروج</button>
          </div>

          <div className="col flex flex-col w-10/12">
            <ProfileInfo/>
          </div>


          
        </div>
      </section>
      <hr/>
    </>
  )
}

export default Profile
