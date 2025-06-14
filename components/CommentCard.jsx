'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const CommentCard = () => {

    const [isDownSolid, setIsDownSolid] = useState(false);
    const [isUpSolid, setIsUpSolid] = useState(false);
  
    const handleDownClick = () => {
      setIsDownSolid(true);
      setIsUpSolid(false);
      setIsDownSolid(!isDownSolid);
    };
  
    const handleUpClick = () => {
      setIsUpSolid(true);
      setIsDownSolid(false);
      setIsUpSolid(!isUpSolid);

    };
  return (
    <div className='w-full flex flex-col mt-4'>
        <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center w-full gap-3'>
                <img src={'/person.jpg'} alt='testimonials'  className='object-cover rounded-full h-10 w-10 overflow-hidden' />
                <h1 className='font-extrabold'>محمد جاد</h1>
            </div>

            <div className='flex gap-2 justify-end items-center' dir='ltr'>
                <Image src={'/star.png'} width={20} height={20} alt='start' className='object-contain' />
                <p className='font-bold '>4.1</p>
            </div>
        </div>

                <p className='w-9/12 max-md:w-full text-gray-800 font-semibold text-justify mt-4'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة ، لقد تم توليد هذا النص من مولد النصوص في أدوات منصة نفذلي ، حيث يمكنك أن تولد
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى تولدها الأداة ، أيضاً ستجد العديد من الأدوات الاخرى التي ستساعدك 
                    في حياتك اليومية .</p>

                    <div className='flex justify-start items-center gap-5 mt-5'>
                    <div className='flex gap-1'>
                        <span>125</span>
                        <button type="button" onClick={handleDownClick}>
                        <i className={`fa-regular ${isDownSolid ? 'fa-solid' : ''} fa-thumbs-down text-red cursor-pointer`} ></i>
                        </button>
                    </div>
                    <div className='flex gap-1'>
                        <span>125</span>
                        <button type="button" onClick={handleUpClick}>
                        <i className={`fa-regular ${isUpSolid ? 'fa-solid' : ''} fa-thumbs-up text-red cursor-pointer`} ></i>
                        </button>
                    </div>
                    </div>

        <span className='mt-6'><hr /></span>

    </div>
  )
}

export default CommentCard