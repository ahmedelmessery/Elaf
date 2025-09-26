'use client'
import { cartContext } from '@/Context/cartContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const CartCardItem = ({product}) => {


 const {RemoveItem , UpdateQuantity} = useContext(cartContext)


  return (
    <div className="card border  border-gray-300 shadow-sm  p-5 rounded-lg ">
    <div className='flex max-md:flex-col items-center justify-start gap-3 '>

    <div className="col">
    <Image src={'/categorie1.png'} width={100} height={100} className='object-contain border border-gray-300 p-3 rounded-lg' alt='image'  />
    </div>

    <div className="col flex flex-col gap-2 ">
        <h1 className='text-sm w-96 font-bold max-md:text-xs max-md:w-60'>{product?.product?.productName}</h1>
        <p className='text-right text-gray-500 text-sm font-bold'>{product?.product?.price} رس</p>

        <div className='flex justify-start items-center gap-6'>
        <span className={`flex bg-${product?.product?.colorName} rounded-full w-8 h-8`} />
        <div className='flex gap-4 justify-center items-center appearance-none border border-gray-400 rounded-3xl w-24 bg-gray-100 text-center h-8'>
        <button className='font-semibold' onClick={()=> UpdateQuantity(product?.product?.id , product?.productCount + 1 )}>+</button>
        <span className='font-semibold'>{product?.productCount === 0 ? RemoveItem(product?.id) : product?.productCount}</span>
        <button className='font-semibold' onClick={()=> UpdateQuantity(product?.product?.id , product?.productCount - 1 )}>-</button>
        </div>
        
        <button type='submit' onClick={()=>RemoveItem(product?.id)} className='flex items-center justify-center'>
        <i className="fa-solid fa-trash-can text-gray-500  hover:text-red bg-white rounded-full p-2 border border-gray-400 transition duration-300"></i>
        </button>

        </div>
    </div>
    
    </div>
</div>
  )
}

export default CartCardItem