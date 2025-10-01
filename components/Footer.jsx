import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-evenly items-start mt-10 py-10 max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:gap-10'>
            <div className="flex flex-col justify-between items-center">
                <h1 className='text-red font-bold text-2xl'>تابعنا علي</h1>
                <div className="flex flex-row mt-6">
                    <Link href={'/'}><Image src={'/facebook.png'} width={40} height={40} alt='instagram' className='object-contain  ease-out transform hover:scale-125 transition duration-500' /></Link>
                    <Link href={'/'}><Image src={'/whatsapp.png'} width={40} height={40} alt='instagram' className='object-contain ease-out transform hover:scale-125 transition duration-500' /></Link>
                    <Link href={'/'}><Image src={'/instagram.png'} width={40} height={40} alt='instagram' className='object-contain ease-out transform hover:scale-125 transition duration-500' /></Link>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center">
            <h1 className='text-red font-bold text-2xl'>حول الشركة</h1>
                    <div className='font-bold flex flex-col items-center gap-4 mt-6 text-lightblack'>
                    <Link href={'/about'} className='hover:text-black'>معلومات عنا</Link>
                    <Link href={''} className='hover:text-black'>معلومات التوصيل</Link>
                    <Link href={''} className='hover:text-black'>شروط وأحكام الشراء</Link>
                    <Link href={''} className='hover:text-black'>شروط وأحكام الموقع</Link>
                    <Link href={''} className='hover:text-black'>سياسة الخصوصية</Link>
                    <Link href={''} className='hover:text-black'>الإستبدال والإرجاع</Link>
                    <Link href={''} className='hover:text-black'>تواصل معنا</Link>
                    </div>
            </div>
            <div className="flex flex-col justify-between items-center text-lightblack">
            <h1 className='text-red font-bold text-2xl'>الأقسام</h1>
            <div className='font-bold flex flex-col items-center gap-4 mt-6'>
                    <Link href={'/categories/smart-phones'} className='hover:text-black'>الهواتف الذكية</Link>
                    <Link href={'/categories/tablets'} className='hover:text-black'>الاجهزة اللوحية</Link>
                    <Link href={'/categories/accessories'} className='hover:text-black'>الاكسسوارات</Link>
                    <Link href={'/categories/smart-watches'} className='hover:text-black'>الساعات الذكية</Link>
                    <Link href={'/categories/used-devices'} className='hover:text-black'>الاجهزة المستعملة</Link>
                    <Link href={'/categories/discounts'} className='hover:text-black'>الخصومات</Link>
                    </div>
            </div>
            <div className="my-auto flex flex-col justify-center items-center">
                <Image src='/logo.png' width={100} height={100} alt="elaf" />
            </div>
        </div>
        <p dir='rtl' className='font-bold text-center p-4 text-sm text-gray-700'>© 2025 ايلاف. كل الحقوق محفوظة</p>
    </footer>
  )
}

export default Footer
