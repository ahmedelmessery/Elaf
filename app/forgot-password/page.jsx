'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'


const ForgotPassword = () => {
  const [isLoading , setIsLoading] = useState(false)
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [errApiMsg , setErrApiMsg] = useState('')

  async function SubmitHandler(event) {
    event.preventDefault(); 
    setIsLoading(true)
    try {
      let response = await axios.post('forgetPassword', {
        email: email
      });
      console.log(response);
      setIsLoading(false)
      if (response.status === 200) {
        toast.success('Reset Code Sent Successfully');
        router.push('/confirm-otp')
      } 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrApiMsg(error.response.data.message);
      } else {
        console.error('Error:', error);
      }
    }
  }
  
  



  return (
    <>
   <title>استرجاع كلمة المرور</title>

    <form className='login w-full text-center m-auto py-20' dir='rtl'>
        <div className='flex flex-col justify-center items-center m-auto w-6/12 py-20 border border-gray-300 max-md:w-3/5 max-sm:py-10 max-sm:border-none'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-xl'>نسيت كلمة المرور</h1>
            <p className='text-gray-500 font-semibold'>نسيت كلمة السر ؟ لا تقلق يمكنك انشاء كلمة سر جديدة خلال دقائق <br/> من خلال إدخال بريدك الالكتروني</p>
            </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>البريد الالكتروني</label>
            <div className="relative">
              <input
                value={email}
                autoComplete="email"
                type='email'
                className="bg-gray-100 outline-none w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
          </div>
          {errApiMsg?<p className='text-red mt-3 text-xs font-bold'>البريد الإلكتروني غير موجود</p>:''}
          <div className='flex justify-between flex-col items-center gap-3 mt-5'>
            <button type='submit' onClick={SubmitHandler} className='bg-red text-white font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>تأكيد</button>
          </div>

            <p className='text-black mt-5 font-bold text-sm  max-lg:text-xs'>ليس لديك حساب ؟ <Link className='hover:text-red transition duration-200' href={'/register'} scroll={false}>أنشيء حساب جديد</Link></p>


        </div>
      </form>

  </>
  )
}

export default ForgotPassword