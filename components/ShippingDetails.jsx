'use client'
import { cartContext } from '@/Context/cartContext'
import { Select, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ShippingDetails = () => {
  const [name , setName] = useState('محمد اشرف')
  const [phone , setPhone] = useState('+201096454566')
  const [postalCode , setPostalCode] = useState('1112')
  const [shipppingDetails , setShipppingDetails] = useState('')
  const router = useRouter()
    const handlePhoneChange = (value) => {
      setPhone(value); // Update the phone state with the new value
  };

  const [countries, setCountries] = useState('');
  const [cities, setCities] = useState('');
  const [states, setStates] = useState('');


  const {orderCode , setOrderCode , orderAddress ,setOrderAddress , handleOrderAddressChange , handleOrderCodeChange} = useContext(cartContext)


  useEffect(() => {
    setName(orderCode);
  }, [orderCode]);

  useEffect(() => {
    setOrderAddress(orderAddress);
  }, [orderAddress]);

  // Function to handle navigation to another page
  const handleNavigation = () => {
    if (orderCode.length < 1 && orderAddress.length < 1) {
      toast.error('من فضلك قم بإدخال اسم المستلم والعنوان بشكل صحيح' , {style:{color:'white' , textAlign:'center'}});
    } else {  
      router.push('/cart/payment')
    }
  };



  return (
    <div className='flex flex-col justify-start items-start gap-2 mt-10 max-md:m-auto' dir='rtl'>
        <div className='ml-auto'>
        <h1 className='text-red font-bold text-right text-lg'>عنوان الشحن</h1>
        </div>

        <div className='relative flex flex-col items-start gap-3 mt-4'>
        <label htmlFor="user" className='text-sm font-bold'>اسم المستلم</label>
        {/* <input type="text" name="user" id="user" value={name} onChange={(e)=> setName(e.target.value)} className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' /> */}
        <input type="text" name="user" id="user" value={orderCode} onChange={handleOrderCodeChange} className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' />
        </div>

        <div dir='ltr' className='flex flex-col gap-3 mt-4 items-srart justify-between w-full'>
        <label dir='rtl' htmlFor="phone" className='text-sm font-bold'>رقم الهاتف</label>
        <PhoneInput
        onChange={handlePhoneChange}
        inputStyle={{background:'rgba(243, 244,246,1)' , border:'none' , width:'20rem' , fontFamily:'Cairo' ,fontWeight:'semibold' , color:'gray' , height:'36px'}}
        country={'eg'} // Default country
        value={phone}
        />
        </div>
      
        <div className='relative flex flex-col items-start gap-3 mt-4'>
        <label htmlFor="postal" className='text-sm font-bold'>الرقم البريدي</label>
        <input type="number" name="postal" id="postal" value={postalCode} onChange={(e)=> setPostalCode(e.target.value)} className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' />
        </div>
        
        <div className='relative flex flex-col items-start gap-3 mt-4'>
        <label htmlFor="address" className='text-sm font-bold'>تفاصيل العنوان</label>
        {/* <input type="text" name="address" id="address" value={shipppingDetails} onChange={(e)=> setShipppingDetails(e.target.value)} className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' /> */}
        <input type="text" name="address" id="address" value={orderAddress} onChange={handleOrderAddressChange} className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] ' />
        </div>
        
        <div className='flex flex-col items-srart justify-between w-full mt-4 gap-2'>

        </div>
        
        <div className='w-auto mt-6  max-sm:m-auto  max-sm:mt-10 flex flex-col gap-5'>
        <button onClick={handleNavigation} className='bg-red text-white font-bold border-red border text-center px-24  py-2 rounded shadow-sm   hover:shadow-md transition duration-200 max-sm:px-10'>
          تابع عملية الدفع
        </button>
        
        <Link scroll={false} href={'/cart'} className='bg-white text-red border-red border font-semibold w-[15rem] m-auto text-center  py-2 rounded shadow-sm   hover:shadow-md transition duration-200 max-sm:px-10 text-xs'>العودة الي عربة التسوق</Link>

        </div>

      
    </div>
  )
}

export default ShippingDetails