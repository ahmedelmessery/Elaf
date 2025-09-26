import Image from 'next/image'
import React from 'react'

const PaymentFailed = () => {
return (
    <div className='flex flex-col justify-center items-center gap-7' dir='rtl'>
        <Image src={'/failed.png'} width={300} height={300} alt='success' className='object-contain' />
        
        <h1 className='text-3xl font-bold'>فشلت عملية الدفع</h1>
        <p id='payment-p' className='font-semibold text-gray-600 text-center'>فشلت عملية الدفع تحقق من وجود رصيد دفع <br/> وطريقة دفع صحيحة وان بطاقتك <br/> مفعلة للشراء علي شبكة الانترنت</p>
        
        <div className='flex flex-row justify-center items-center gap-5'>
            <button type="button" className='bg-red text-white font-bold px-16 py-3'>إعادة المحاولة</button>
            <button type="button" className='bg-white text-red border-red border font-bold px-16 py-3'>طلب دعم</button>
        </div>
    </div>
    )
}

export default PaymentFailed