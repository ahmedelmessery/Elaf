import Link from 'next/link'
import React from 'react'

const ShippingAddressCard = () => {
    return (
    <div className='card max-md:border-b-2 shadow-sm max-md:shadow-none  md:border md:border-gray-300  rounded-2xl p-4  flex items-center justify-between w-full'>
    <div className='flex flex-col gap-2'>
        <p className='text-sm font-bold  lg:text-base'>العنوان الرئيسي </p>
        <p className='text-sm font-bold text-gray-500'>المملكة العربيية السعودية</p>
        <p className='text-sm font-bold text-gray-500'>الرياض  حي الزهور</p>
        <p className='text-sm font-bold text-gray-500'>201096454566+</p>
    </div>
    <div className='flex items-center justify-end max-md:mt-4'>
        <Link scroll={false} href={'/update-addresses'}><i className="fa-solid fa-pen text-gray-500 hover:text-gray-700"></i></Link>
    </div>
    </div>
    )
}

export default ShippingAddressCard