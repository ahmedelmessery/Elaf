'use client'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ContactUs = () => {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [message , setMessage] = useState('')
  
  const ContactUs = ()=>{
    return axios.post('api/v1/contactus',{
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then(res => {
      toast.success('شكرًا لك! تم إرسال رسالتك بنجاح. سوف نتصل بك قريبا جدا!',{style:{textAlign:'center'}})
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    })
    .catch(err => {
      toast.error('من فضلك قم بتسجيل الدخول او املئ البيانات',{style:{color:'white' ,textAlign:'center'}})
    })
  }





  return (
    <>
       <title>تواصل معنا</title>

      <section className='contact-us' dir='rtl'>
      <div className='flex flex-col justify-between items-start max-md:py-10 px-10 py-20' dir='rtl'>
          <h1 className='font-black text-2xl'>تواصل معنا</h1>
          <span className='border-b-4 border-red w-10 mt-2'></span>  
              <div className='flex justify-evenly items-center max-lg:flex-col-reverse w-full mt-10  gap-5'>
                <div className="col flex flex-col items-center gap-3">
                  <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='الإسم' maxLength={25} className='placeholder:text-gray-500 placeholder:font-bold text-sm w-[24rem] h-[3rem]  p-2 max-sm:pl-30 max-md:pl-40  outline-none border border-greyy' />
                  <input value={email} onChange={(e)=> setEmail(e.target.value)}   type="email" placeholder='الإيميل' maxLength={40} className='placeholder:text-gray-500 placeholder:font-bold text-sm w-[24rem] h-[3rem] p-2 max-sm:pl-30 max-md:pl-40  outline-none border border-greyy'/>
                  <input value={phone} onChange={(e)=> setPhone(e.target.value)}  dir='rtl' type="tel" maxLength={11} placeholder='رقم التليفون' className='placeholder:text-gray-500 placeholder:font-bold text-sm w-[24rem] h-[3rem]  p-2 max-sm:pl-30 max-md:pl-40 outline-none border border-greyy' />
                  <textarea value={message} onChange={(e)=> setMessage(e.target.value)} type="text" placeholder='الرسالة' className='text-right placeholder:text-gray-500 placeholder:font-bold text-sm w-[24rem] h-[10rem] p-2 max-sm:pl-30 max-md:pl-40 outline-none border border-greyy' />

                </div>
                <div className="col flex flex-col  items-start gap-3 border border-greyy p-[45px] max-md:p-[36px]  max-lg:py-[50px] max-lg:px-[80px] max-md:mt-6">
                      <div>
                      <p className='font-bold text-lg py-1 '>بيانات التواصل</p>
                      <div className='border-b-2 border-red w-10'/>
                      </div>
                    <div className='flex flex-col items-start mt-3 gap-4'>
                    <p className=''> <span><i className="fa-solid fa-phone text-red ml-2"></i></span>201096454566+</p>
                    <p className=''> <span><i className="fa-regular fa-envelope text-red ml-2"></i></span>mohamedashraf@gmail.com</p>
                    <p className=''> <span><i className="fa-solid fa-location-dot text-red ml-2"></i></span>Zahraa, Steet Reiad Sudia Arbia</p>
                    </div>
                </div>
              </div>

  
      </div>
                    <div className='pb-20'>
                    <button onClick={ContactUs} type="submit" className='bg-white text-center m-auto flex justify-center items-center text-red font-bold px-10 py-2 border-[2px] border-red hover:text-white hover:bg-red transition duration-300 hover:border-white'>ارسال</button>
                    </div>
      <hr />
      </section>

    </>
  )
}

export default ContactUs