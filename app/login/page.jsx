'use client'
import { useUserContext } from '@/Context/userContext'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const {fetchUserDetails } = useUserContext()
  const router = useRouter()




  const [apiMessageError, setApiMessageError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [showPasswordLock, setShowPasswordLock] = useState(true);


  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  const toggleRememberPassword = () => {
    setRememberPassword(prevState => !prevState);
  };
  


  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: SubmitHandler,
  });


  async function SubmitHandler(values) {
    try {
      let response = await axios.post('login', values);
      localStorage.setItem('token', response.data.result.token);
      localStorage.setItem('userId', response.data.result.userId);
      if (response.status === 200) {
        toast.success('Logged in Successfully');
        fetchUserDetails();
        router.push('/');
      }
    } catch (error) {
      if (error && error.response&& error.response.status === 422) {
        setApiMessageError('هذا البريد غير مسجل');
      }
      else if (error && error.response&& error.response.status === 401)
      {
        setApiMessageError('كلمة المرور خاطئة');
      }
    }
  }


  function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Email is Invalid";
    } 
    if (!values.password) {
      errors.password = "Password is Required";
    } 
    return errors;
  }


  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_Backend_Url}/auth/google`,
			"_self"
		);
	};
  const facebookAuth = () => {
		window.open(
			`${process.env.REACT_APP_Backend_Url}/auth/facebook`,
			"_self"
		);
	};
  return (
    <>
    <title>تسجيل الدخول</title>

      <form onSubmit={formik.handleSubmit}  className='login w-full text-center m-auto py-20 max-sm:py-0' dir='rtl'>
        <div className='flex flex-col justify-center items-center m-auto w-6/12 py-20 border border-gray-300 max-md:w-3/5 max-sm:py-10 max-sm:border-none'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-xl'>سجل دخول الان</h1>
            <p className='text-gray-500 font-semibold'>ادخل بياناتك لتتمتع بنجربة تسوق مميزة</p>
            </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-10'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>البريد الالكتروني</label>
            <div className='relative'>
            <input type="email" className='bg-gray-100 outline-none w-[25rem]  px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]' 
            autoComplete='email'
            name="email"
            id="email"
            maxLength={30}
            onFocus={() => setShowEmail(false)} 
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            />
            {showEmail && ( 
                <i className="fa-solid fa-envelope text-gray-600 absolute right-0 p-3"></i>
              )}
              
              </div>


          </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>كلمة المرور</label>
            <div className="relative">
              <input
                autoComplete="new-password"
                type={passwordVisible ? "text" : "password"}
                className="bg-gray-100 outline-none w-[25rem]  px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                name="password"
                id="password"
                maxLength={20}
                value={formik.values.password}
                onChange={formik.handleChange}
                onFocus={() => setShowPasswordLock(false)} 
                onBlur={formik.handleBlur}
              />
              {showPasswordLock && ( 
                <i className="fa-solid fa-lock text-gray-600 absolute right-0 p-3"></i>
              )}
              <i
                className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} text-gray-600 absolute left-0 p-3 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>

          <div className='flex justify-between items-center gap-32 max-lg:gap-16 mt-5'>
              <div className='flex items-center'>
              <span className="ml-2 text-center cursor-pointer" onClick={toggleRememberPassword}>
                {rememberPassword ? (
                  <i className="fa-solid fa-square-check text-red text-lg cursor-pointer"></i>
                ) : (
                  <i className="fa-regular fa-square text-lg cursor-pointer hover:bg-gray-100"></i>
                )}
              </span>

              <label htmlFor="rememberPassword" className="text-gray-700 text-sm font-bold max-lg:text-xs max-sm:text-[9px] cursor-pointer">
                تذكرني على هذا الجهاز</label>

              <input
                value={rememberPassword}
                type="checkbox"
                id="rememberPassword"
                name='rememberPassword'
                className="hidden"
                checked={rememberPassword}
                onChange={toggleRememberPassword}
              />
              </div>
              <Link href={'/forgot-password'} scroll={false} className='text-red text-sm font-bold max-lg:text-xs hover:animate-pulse max-sm:text-[9px]'>نسيت كلمة السر؟</Link>
          </div>

          {apiMessageError.length >0?<div className="text-red w-full font-bold text-xs mt-3" role="alert">
          {apiMessageError}
        </div>:null}

          <div className='flex justify-between flex-col items-center gap-3 mt-5'>
            <button type='submit' onClick={SubmitHandler} className='bg-red text-white font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>تسجيل الدخول</button>
            <Link scroll={false} href={'/register'} className='bg-white text-red font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm border border-red max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>إنشاء حساب</Link>
          </div>

            <p className='text-gray-700 mt-5 font-bold text-sm  max-lg:text-xs'>او</p>


            <div className='mt-5 flex flex-col items-center justify-center gap-3'>
            <button onClick={facebookAuth}  className='bg-white border border-gray-300 text-gray-400 font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm flex items-center justify-center text-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200 hover:text-gray-700 max-sm:text-[10px]'><span className='ml-2'><Image src={'/facebook-auth.png'} width={20} height={20} alt='facebook' className='object-contain' /></span>تسجيل الدخول باستخدام الفيسبوك</button>
            <button onClick={googleAuth}  className='bg-white border border-gray-300 text-gray-400 font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm flex items-center justify-center text-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200 hover:text-gray-700 max-sm:text-[10px]'><span className='ml-2'><Image src={'/google-auth.png'} width={20} height={20} alt='facebook' className='object-contain' /></span>تسجيل الدخول باستخدام جوجل</button>
            </div>

        </div>
      </form>
    </>
  )
}

export default Login
