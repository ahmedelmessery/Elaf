import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DescriptionTap1 = ({productDetails}) => {
  return (
    <div dir='rtl' className='mx-10 product-desc'>
      {productDetails?.coverImage?
    <div className="banner-container">
    <img src={`https://elaf.onrender.com/${productDetails?.coverImage}`} alt='product-cover'  className='max-w-screen-2xl object-cover object-center h-500'/>
    <div className="overlay"></div> {/* Overlay element */}
    </div>
    :''
    }


        <div className='flex flex-col justify-start items-start mt-10 gap-3'>
            <h1 className='font-bold'>الوصف</h1>
            <p className='text-gray-500 md:w-9/12 text-justify font-semibold'>{productDetails?.description}</p>
        </div>


        <div className='mt-20'>
        <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl'>التوصيات</h1>
                <Link href={'/categories/recommendations'}>
                <h1 className='text-gray-500 text-sm animate-pulse' dir='rtl'>عرض المزيد <span><i className="fa-solid fa-caret-left"></i></span></h1>
                </Link>
        </div>
    </div>

    </div>
  )
}

export default DescriptionTap1