'use client'
import { useUserContext } from '@/Context/userContext'
import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
  const router = useRouter()
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setconfirmPasswordVisible] = useState(false);
  const [agreePolicy, setagreePolicy] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setconfirmPasswordVisible(prevState => !prevState);
  };

  const toggleAgreePolicy = () => {
    setagreePolicy(prevState => !prevState);
    if (errorMessage) {
      setErrorMessage(''); 
    }
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [apiMessageError, setApiMessageError] = useState('');
  const [showProfile, setShowProfile] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPasswordLock, setShowPasswordLock] = useState(true);
  const [showConfirmPasswordLock, setConfirmShowPasswordLock] = useState(true);
  const {userData} = useUserContext()

  useEffect(() => {
    if (userData) {
      router.push('/');
    }
  }, [userData, router]);



  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: SubmitHandler,
  });



  async function SubmitHandler(values) {
    if (!agreePolicy) {
      setErrorMessage('من فضلك وافق على الشروط والأحكام');
      return;
    } 
    try {
      let response = await axios.post('user', values);
      console.log('Response:', response);
      
      if (response && response.data && response.status === 200) {
        toast.success('Account Created Successfully');
        router.push('/login');
      } else {
        console.log('Unexpected response:', response && response.data);
        console.log(apiMessageError);
      }
    } catch (err) {
      
      if (err.response && err.response.data && err.response.data.message) {
        setApiMessageError(err?.response?.data?.message);
      } else {
        console.log('Error:', err); 
        
      }
    }
  }
  


  
  function validate(values) {
    let errors = {};

    if (!values.name) {
      errors.name = "برجاء ادخال اسم المستخدم";
    } else if (values.name.length < 3) {
      errors.name = "اسم المستخدم يجب ان لا يقل عن ثلاثة احرف";
    } else if (values.name.length > 25) {
      errors.name = "اسم المستخدم يجب ان لا يزيد عن خمسة وعشرين حرف";
    }


    if (!values.email) {
      errors.email = "يجب ادخال البريد الالكتروني";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "البريد الالكتروني غير صالح";
    } 


    if (!values.password) {
      errors.password = "يجب ادخال كلمة المرور";
    } else if (!/^[A-Za-z]\w{7,14}$/.test(values.password)) {
      errors.password = "كلمة المرور ضعيفه";
    } 


    if (!values.rePassword) {
      errors.rePassword = "برجاء تأكيد كلمة المرور";
    } else if (values.password !== values.rePassword) {
      errors.rePassword = "كلمة المرور غير متطابقه";
    } 

    return errors;
  }



  return (
    <>
        <title>انشاء حساب جديد</title>

    <Toaster
  toastOptions={{
    success: {
      style: {
        background: 'white',
      },
      iconTheme: {
        primary: 'green',      },
    },
    error: {
      style: {
        background: 'red',
      },
    },
  }}
/>
    
    
    <form onSubmit={formik.handleSubmit} className='register w-full text-center m-auto py-20 max-sm:py-0' dir='rtl'>
        <div className='flex flex-col justify-center items-center m-auto w-6/12 py-20 border border-gray-300 max-md:w-3/5 max-sm:py-10 max-sm:border-none'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-xl'>انشئ حساب الان</h1>
            <p className='text-gray-500 font-semibold'>ادخل بياناتك لتتمتع بنجربة تسوق مميزة</p>
            </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-10'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>اسم المستخدم</label>
            <div className='relative'>
            <input value={formik.values.name} type="text" className='bg-gray-100 outline-none w-[25rem]  px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]'
            autoComplete='name'
            id='name'
            name='name'
            maxLength={25}
            onChange={formik.handleChange}
            onFocus={() => setShowProfile(false)} 
            onBlur={formik.handleBlur} 
            />
           {showProfile && ( 
                <i className="fa-solid fa-user text-gray-600 absolute right-0 p-3"></i>
              )}
            </div>
            {formik.errors.username && formik.touched.username?<div className="text-red w-full p-1 text-sm max-sm:text-xs">{formik.errors.username}</div>:null}
          </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>البريد الالكتروني</label>
            <div className='relative'>
            <input type="text" className='bg-gray-100 outline-none w-[25rem] px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]' 
            autoComplete='email'
            onFocus={() => setShowEmail(false)} 
            onBlur={formik.handleBlur}
            name="email"
            maxLength={30}
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
              />
            {showEmail &&( 
                <i className="fa-solid fa-envelope text-gray-600 absolute right-0 p-3"></i>
              )}
            </div>
            {formik.errors.email && formik.touched.email?<div className="text-red w-full p-1 text-sm max-sm:text-xs">{formik.errors.email}</div>:null}
          </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>كلمة المرور</label>
            <div className="relative">
              <input
                autoComplete="new-password"
                type={passwordVisible ? "text" : "password"}
                className="bg-gray-100 outline-none w-[25rem]  px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                onFocus={() => setShowPasswordLock(false)} // 
                onBlur={formik.handleBlur}
                name="password"
                id="password"
                maxLength={20}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {showPasswordLock &&( 
                <i className="fa-solid fa-lock text-gray-600 absolute right-0 p-3"></i>
              )}
              <i
                className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} text-gray-600 absolute left-0 p-3 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            {formik.errors.password && formik.touched.password?<div className="text-red w-full p-1 text-sm max-sm:text-xs">{formik.errors.password}</div>:null}

          </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>تأكيد كلمة المرور</label>
            <div className="relative">
              <input
                autoComplete="confirm-password"
                type={confirmPasswordVisible ? "text" : "password"}
                className="bg-gray-100 outline-none w-[25rem]  px-2 h-9 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem]"
                onFocus={() => setConfirmShowPasswordLock(false)}
                onBlur={formik.handleBlur}
                maxLength={20}
                name="rePassword"
                id="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
              />
              {showConfirmPasswordLock && (
                <i className="fa-solid fa-lock text-gray-600 absolute right-0 p-3"></i>
              )}
              <i
                className={`fa-solid ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} text-gray-600 absolute left-0 p-3 cursor-pointer`}
                onClick={toggleConfirmPasswordVisibility}
              ></i>
            </div>
            {formik.errors.rePassword && formik.touched.rePassword?<div className="text-red w-full p-1 text-sm max-sm:text-xs">{formik.errors.rePassword}</div>:null}
          </div>




          <div className='flex justify-between items-center gap-24 max-lg:gap-14 mt-5'>
          <div className="flex items-center">
            <span className="ml-2 text-center cursor-pointer" onClick={toggleAgreePolicy}>
              {agreePolicy ? (
                <i className="fa-solid fa-square-check text-red text-lg max-sm:text-[14px]"></i>
              ) : (
                <i className="fa-regular fa-square text-lg hover:bg-gray-100 max-sm:text-[14px]"></i>
              )}
            </span>
            <label htmlFor="agreePolicy" className="text-gray-700 text-sm font-bold max-lg:text-xs max-sm:text-[9px] cursor-pointer"
            >أوافق على الشروط والأحكام</label>
            <input
              required
              type="checkbox"
              id="agreePolicy"
              className="hidden"
              checked={agreePolicy}
              onChange={toggleAgreePolicy}
            />
          </div>
              <Link href={'/forgot-password'} scroll={false} className='text-red text-sm font-bold max-lg:text-xs hover:animate-pulse max-sm:text-[9px] '>نسيت كلمة السر؟</Link>
          </div>
          {errorMessage && (<p className="text-red w-full p-1 text-sm max-sm:text-xs mt-2">{errorMessage}</p>)}

          {apiMessageError.length >0?<div className="text-red w-full p-1 text-sm max-sm:text-xs mt-2" role="alert">
         {apiMessageError}
        </div>:null}


          <div className='flex justify-between flex-col items-center gap-3 mt-5'>
            <button type='submit' onClick={SubmitHandler} disabled={!(formik.isValid && formik.dirty)} className='bg-red text-white font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>إنشاء حساب</button>
            <Link scroll={false} href={'/login'} className='bg-white text-red border border-red font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>تسجيل الدخول</Link>
          </div>

            <p className='text-gray-700 mt-5 font-bold text-sm  max-lg:text-xs'>او</p>


            <div className='mt-5 flex flex-col items-center justify-center gap-3'>
            <button  className='bg-white border border-gray-300 text-gray-400 font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm flex items-center justify-center text-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200 hover:text-gray-700 max-sm:text-[10px]'><span className='ml-2'><Image src={'/facebook-auth.png'} width={20} height={20} alt='facebook' className='object-contain' /></span>تسجيل الدخول باستخدام الفيسبوك</button>
            <button  className='bg-white border border-gray-300 text-gray-400 font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm flex items-center justify-center text-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200 hover:text-gray-700 max-sm:text-[10px]'><span className='ml-2'><Image src={'/google-auth.png'} width={20} height={20} alt='facebook' className='object-contain' /></span>تسجيل الدخول باستخدام جوجل</button>
            </div>

        </div>
      </form>
  </>
  )
}

export default SignUp