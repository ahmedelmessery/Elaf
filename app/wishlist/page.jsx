'use client'
import { cartContext } from '@/Context/cartContext';
import CardItem from '@/components/CardItem';
import EmptyWishlist from '@/components/EmptyWishlist';
import Spiner from '@/components/Spiner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Wishlist = () => {
  const {wishlist , GetWishlist , RemoveFromWishlist , isLoading , AddToCart , setnumOFItems} = useContext(cartContext)

  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

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



  useEffect(()=> {
    GetWishlist()
  },[])



  return (
    <>
    <title>المفضلة</title>
    <div className='mt-10 p-10' dir='rtl'>
    {wishlist.length === 0? <EmptyWishlist /> : 
        <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
            {isLoading? <Spiner /> : ''}
              {wishlist.map((product , index ) => 
                <div key={index} className='card flex flex-col justify-center  w-72  p-5 xl:w-3/12 h-[500px] border border-red rounded-md' >
        <div className='flex justify-center items-center '>
          <Link href={`/${product?.productId}`}>
          <img src={`http://localhost:4000/${product?.product.coverImage}`} alt='model' width={200} height={200} className='object-contain border border-gray-300 p-5 rounded-md' />
          </Link>
        </div>
    <div className='text flex flex-col justify-start items-start'>
        <h1 className='text-red font-bold text-sm mt-2'>الكترونيات</h1>
        <p className='font-bold text-xl'>{product?.product.productName}</p>
          <div className='w-full flex justify-between items-center mt-3'>
              <h1 className='font-bold text-lg'>{product?.product?.price} رس</h1>
              {product?.product?.discountPrice ? <h2 className='text-gray-400 font-bold line-through'>{product?.product?.discountPrice} رس</h2> : ''}
              {product?.product?.totalRates ? 
              <div className='flex' dir='ltr'>
              <Image src={'/star.png'} width={20} height={20} alt='start' className='object-contain' />
                <p className='font-bold '>{product?.product?.totalRates}</p> 
          </div>
            : ''}
    </div>

    <div className='w-full flex justify-between items-center mt-5'>
            <button type="button" onClick={()=>AddProduct(product?.product?.id,1)} className='bg-transparent text-red font-extrabold border-2 border-red px-6 py-3 rounded-xl hover:bg-red hover:text-white transition duration-300'>اضافة للسلة</button>
            <button type='button' onClick={()=>RemoveFromWishlist(product?.id)} className='py-4 px-5  rounded-md text-white'>
            <i className="fa-solid fa-heart-circle-xmark  text-red"></i>
            </button>
    </div>
    </div>
</div>
              )}
          </div>
}
    </div>  
  </>
  )
}

export default Wishlist