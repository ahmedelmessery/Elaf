'use client'
import { CategoryProvider, useCategoryContext } from '@/Context/categoryContext'
import Spiner from '@/components/Spiner'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const {categories , getCategories , isLoading} = useCategoryContext()
  const headers = {
    token: localStorage.getItem('token')
  }
  


  useEffect(()=> {
    getCategories()
  },[])
  
  return (
    <>
    <title>الفئات</title>

    <div className='p-10 flex justify-between' dir='rtl'>
        <div className="flex justify-center items-start flex-col gap-3" dir='rtl'>
          <h1 className='font-bold md:text-2xl'>تسوق حسب الفئات</h1>
          <p className='font-semibold'>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>

    {isLoading? <Spiner /> : ''}


    <div className='p-10 flex justify-center items-center gap-5 flex-wrap' dir='rtl'>
      {categories?.map((category) => 
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
    </>
  )
}

export default Categories