'use client'
import { cartContext } from '@/Context/cartContext'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'

const CardItem = ({product}) => {
  let {AddToCart , setnumOFItems , AddToWishlist} = useContext(cartContext)
  const pathName = usePathname()
  const [isFavClicked , setIsFavClicked] = useState(false)


  async function AddProduct(productId,productCount)
  {
    
    let response = await AddToCart(productId , productCount)
    console.log(response);
    if(response?.status === 200)
    {
      toast.success('تم اضافة المنتج الي عربة التسوق')
      setnumOFItems(response.data.numOfCartItems)
    }
    else
    {
      toast.error('يجب عليك تسجيل الدخول',{style:{color:'white'}})
    }
  }


  async function addToWishlist(productId)
  {
    
    let response = await AddToWishlist(productId)
    setIsFavClicked(true);
    if(response?.status === 200)
    {
      console.log(response);
      toast.success('تم اضافة المنتج الي المفضلة')
    }
    // else
    // {
    //   toast.error('يجب عليك تسجيل الدخول',{style:{color:'white'}})
    // }
  }
  





  return (
<div className='card flex flex-col justify-center  w-72  p-5 xl:w-3/12 h-[500px] border border-red rounded-md' key={product?.id}>
        <div className='flex justify-center items-center '>
          <Link href={`/${product?.id}`}>
          <img src={`http://localhost:4000/${product?.coverImage}`} alt='model' width={200} height={200} className='object-contain border border-gray-300 p-5 rounded-md' />
          </Link>
        </div>
    <div className='text flex flex-col justify-start items-start'>
        <h1 className='text-red font-bold text-sm mt-2'>الكترونيات</h1>
        <p className='font-bold text-xl'>{product?.productName}</p>
          <div className='w-full flex justify-between items-center mt-3'>
              <h1 className='font-bold text-lg'>{product?.price} رس</h1>
              {product?.discountPrice ? <h2 className='text-gray-400 font-bold line-through'>{product?.discountPrice} رس</h2> : ''}
              {product?.totalRates ? 
              <div className='flex' dir='ltr'>
              <Image src={'/star.png'} width={20} height={20} alt='start' className='object-contain' />
                <p className='font-bold '>{product?.totalRates}</p> 
          </div>
            : ''}
    </div>

    <div className='w-full flex justify-between items-center mt-5'>
            <button type="button" onClick={()=>AddProduct(product.id,1)} className='bg-transparent text-red font-extrabold border-2 border-red px-6 py-3 rounded-xl hover:bg-red hover:text-white transition duration-300'>اضافة للسلة</button>
            <button type='button' onClick={()=>addToWishlist(product.id)} className='py-4 px-5 border border-gray-400 rounded-md text-white'>
            <i  className={`${isFavClicked? 'fa-solid fa-heart-circle-check text-[20px] text-red' : 'fa-solid fa-heart-circle-plus text-[20px] text-gray-400'} transition duration-300 hover:text-red `}></i>
            </button>
    </div>
    </div>
</div>
  )
}

export default CardItem