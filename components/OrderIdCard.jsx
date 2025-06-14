import Image from 'next/image'
import React from 'react'

const OrderIdCard = () => {
  return (
    <div className="card border  border-gray-300 shadow-sm  p-5 rounded-lg ">
    <div className='flex max-md:flex-col items-center justify-start gap-3 '>

    <div className="col">
    <Image src={'/categorie1.png'} width={100} height={100} className='object-contain border border-gray-300 p-3 rounded-lg' alt='image'  />
    </div>

    <div className="col flex flex-col gap-2 ">
        <h1 className='text-sm w-96 font-bold max-md:text-xs max-md:w-60'>ساعة ابل وتش التر الجديدة وظيفة الاتصال الخلوي + نظام تحديد المواقع هيكل تيتانيوم 49 مل متر</h1>
        <p className='text-right text-gray-500 text-sm font-bold'>965 رس</p>

        <div className='flex justify-between items-center gap-6'>
        <span className='flex bg-black rounded-full w-8 h-8' /> 
          <div>
            <p className='border border-gray-300 rounded-full py-2 px-4'>1</p>
          </div>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default OrderIdCard