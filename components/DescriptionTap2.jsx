import {Rate } from 'antd'
import React from 'react'
import CommentCard from './CommentCard';

const DescriptionTap2 = ({productComments}) => {

  const desc = [2754, 478, 3252, 145, 965];



  return (
    <div dir='rtl' className='mx-10 product-desc'>
                <div className='flex flex-col justify-start items-start gap-3 mt-5 w-full'>
            <h1 className='font-extrabold text-red'>تقييمات العملاء</h1>
              <div className='mt-3 flex flex-col gap-4'>
                  <div className='flex justify-start items-center gap-2'>
                  <Rate disabled defaultValue={1} />
                    <span className='font-bold'>{desc[0]}</span>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                  <Rate disabled defaultValue={2} />
                  <span className='font-bold'>{desc[1]}</span>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                  <Rate disabled defaultValue={3} />
                  <span className='font-bold'>{desc[2]}</span>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                  <Rate disabled defaultValue={4} />
                  <span className='font-bold'>{desc[3]}</span>
                  </div>
                  <div className='flex justify-start items-center gap-2'>
                  <Rate disabled defaultValue={5} />
                  <span className='font-bold'>{desc[4]}</span>
                  </div>
              </div>

                <div className='flex flex-col justify-start items-start mt-14 gap-3 w-full'>
                    <h1 className='font-extrabold text-red'>التعليقات</h1>
                    {productComments?.map((comment, index) => <CommentCard key={index} comment={comment} />)}
                    <CommentCard />
                </div>

    
        </div>

    </div>
  )
}

export default DescriptionTap2