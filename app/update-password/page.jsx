'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const UpdatePassword = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPasswordLock, setShowPasswordLock] = useState(true);
    const [showConfirmPasswordLock, setConfirmShowPasswordLock] = useState(true);


    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
      };

      const toggleConfirmPasswordVisibility = () => {
        setconfirmPasswordVisible(prevState => !prevState);
      };

      

  return (
    <>
    
   <title>أنشيء كلمة مرور جديدة</title>


    <form className='login w-full text-center m-auto py-20' dir='rtl'>
        <div className='flex flex-col justify-center items-center m-auto w-6/12 py-20 border border-gray-300 max-md:w-3/5 max-sm:py-10 max-sm:border-none gap-4 '>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-xl'>أنشيء كلمة مرور جديدة</h1>
            <p className='text-gray-500 font-semibold'>من خلال انشاء كلمة سر قوية يمكنك الحفاظ علي امان معلوماتك الشخصية</p>
            </div>


            <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>كلمة المرور الجديدة</label>
            <div className="relative">
              <input
                value={password}
                autoComplete="new-password"
                type={passwordVisible ? "text" : "password"}
                className="bg-gray-100 outline-none w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                onChange={(e)=>setPassword(e.target.value)}
                onFocus={() => setShowPasswordLock(false)} // Hide icon when input is focused
                onBlur={() => setShowPasswordLock(password.length === 0)} // Show icon when input loses focus
              />
              {showPasswordLock && password.length === 0 && ( // Corrected condition for showing the lock icon
                <i className="fa-solid fa-lock text-gray-600 absolute right-0 p-3"></i>
              )}
              <i
                className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} text-gray-600 absolute left-0 p-3 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>




            <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>اعادة كلمة المرور</label>
            <div className="relative">
              <input
                value={confirmPassword}
                autoComplete="confirm-password"
                type={confirmPasswordVisible ? "text" : "password"}
                className="bg-gray-100 outline-none w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                onFocus={() => setConfirmShowPasswordLock(false)} // Hide icon when input is focused
                onBlur={() => setConfirmShowPasswordLock(confirmPassword.length === 0)} // Show icon when input loses focus
              />
              {showConfirmPasswordLock && confirmPassword.length === 0 && ( // Corrected condition for showing the lock icon
                <i className="fa-solid fa-lock text-gray-600 absolute right-0 p-3"></i>
              )}
              <i
                className={`fa-solid ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} text-gray-600 absolute left-0 p-3 cursor-pointer`}
                onClick={toggleConfirmPasswordVisibility}
              ></i>
            </div>
          </div>


          <div className='flex justify-between flex-col items-center gap-3 mt-5'>
            <button className='bg-red text-white font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>تأكيد</button>
          </div>

            <p className='text-black mt-5 font-bold text-sm  max-lg:text-xs'>ليس لديك حساب ؟ <Link className='hover:text-red transition duration-200' href={'/register'} scroll={false}>أنشيء حساب جديد</Link></p>


        </div>
      </form>

  </>
  )
}

export default UpdatePassword