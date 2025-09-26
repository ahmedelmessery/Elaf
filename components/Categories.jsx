'use client'
import { useCategoryContext } from '@/Context/categoryContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Spiner from './Spiner'

const Categories = () => {
  const {categories , getCategories , isLoading} = useCategoryContext()
  const headers = {
    token: localStorage.getItem('token')
  }
  


  useEffect(()=> {
    getCategories()
  },[])
  
  return (
    <section>
      <div className='p-10 flex justify-between' dir='rtl'>
        <div className="flex justify-center items-start flex-col gap-3" dir='rtl'>
          <h1 className='font-bold md:text-2xl'>تسوق حسب الفئات</h1>
          <p className='font-semibold'>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      <div>

        <Link href={'/categories'}>
                <h1 className='text-gray-500 text-sm animate-pulse' dir='rtl'>الفئات<span><i className="fa-solid fa-caret-left"></i></span></h1>
        </Link>
        </div>
      </div>

      {isLoading? <Spiner /> : ''}

      <div className='p-10 flex justify-center items-center gap-5 flex-wrap' dir='rtl'>
      {categories?.slice(0, 5).map((category) => 
      <div key={category?.id} className="category-container">
            <Link href={`/categories/${category?.id}`}>
          <div className="img-container rounded-lg p-4">
          <img 
                  src={`https://elaf.onrender.com/${category?.logoUrl}`}
                  alt={category?.categoryNameAr} 
                  width={100} 
                  height={100} 
                  className='object-contain' 
                />
          </div>
          <p className='font-bold mt-4'>{category?.categoryNameAr}</p>
            </Link>
        </div>
        )}
    </div>


    </section>
  )
}

export default Categories
