import moment from 'moment';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderCard = ({order}) => {
  let orderId = order.id

  const dateString = order.createdAt;
  const date = moment(dateString);
  const normalDateFormat = date.format('DD-MM-YYYY');

  return (
    <div className='card shadow-sm max-md:shadow-none  border border-gray-300 max-md:border-none rounded-2xl p-4 max-sm:mr-14 max:sm:flex max:sm:flex-col items-center justify-center'>
    <div className='flex flex-col gap-2'>
      <p className='text-sm font-bold text-red lg:text-base'>تم الطلب يوم {normalDateFormat} وجاري التوصيل</p>
      <p className='text-sm font-bold text-gray-400'>رقم  الطلب {order.orderCode}</p>
    </div>
    <div className='flex flex-col gap-2 items-end justify-center max-md:mt-4'>
      <div className='flex gap-2'>
        <Image src={'/categorie1.png'} width={50} height={50} className='object-contain border border-gray-300 p-[.10rem] rounded-lg' alt='image'  />
        <Image src={'/categorie1.png'} width={50} height={50} className='object-contain border border-gray-300 p-[.10rem] rounded-lg' alt='image'  />
        <Image src={'/categorie1.png'} width={50} height={50} className='object-contain border border-gray-300 p-[.10rem] rounded-lg' alt='image'  />
        </div>
    <div className='flex mt-2'>
    <Link href={`/orders/${orderId}`} className='font-bold text-gray-700 hover:text-black text-sm'>تصفح الطلب</Link>
    </div>
    </div>
    <hr className='max-md:flex max-md:mt-[2rem] hidden w-full' />
</div>

  )
}

export default OrderCard