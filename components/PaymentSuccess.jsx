import Image from 'next/image'
import React from 'react'

const PaymentSuccess = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-7' dir='rtl'>
        <Image src={'/success.png'} width={300} height={300} alt='success' className='object-contain' />
        
        <h1 className='text-3xl font-bold'>نجحت عملية الدفع</h1>
        <p id='payment-p' className='font-semibold text-gray-600 text-center'>شكرا لإستخدامك تطبيقنا يسعدنا ان نخبرك بأن <br/> طلبك قد تم دفعة بنجاح وأن طلبك هو <br/> #16065409</p>
        
        <div className='flex flex-row justify-center items-center gap-5'>
            <button type="button" className='bg-red text-white font-bold px-16 py-3'>تتبع طلبك</button>
            <button type="button" className='bg-white text-red border-red border font-bold px-16 py-3'>تابع التسوق</button>
        </div>
    </div>
  )
}

export default PaymentSuccess