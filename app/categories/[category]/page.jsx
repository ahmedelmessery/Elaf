'use client'
import { useCategoryContext } from '@/Context/categoryContext'
import { useUserContext } from '@/Context/userContext'
import CardItem from '@/components/CardItem'
import LandingSlider from '@/components/LandingSlider'
import Spiner from '@/components/Spiner'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Category = () => {
  // const pathName = usePathname().split('/')[2]
  // console.log(pathName);

  // const{getRecentProducts , recentProducts , isLoading} = useCategoryContext()
  const [productsCategory , setProductsCategory] = useState([])
  const {headers , token} = useUserContext()
  const {categoryName} = useCategoryContext()
  const [isLoading , setIsLoading] = useState(false)

  const params = useParams()
  const categoryId = params.category
  
  
  const getCategoryProducts = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`productsByCategoryId/${categoryId}`);
      setProductsCategory(response.data.result);
      setIsLoading(false)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getCategoryProducts();
  }, []);
  
  return (
    <>
              {productsCategory.map((product => <title key={product.id}>{product?.category?.categoryNameAr}</title>))}

       

    {/* <LandingSlider /> */}
    
    <section dir='rtl' className='p-10 mt-10'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-2'>
        {productsCategory.map((product => 
        <div key={product.id} className='flex items-center gap-1'>
        <h1  className='font-bold text-xl'>قسم {product?.category?.categoryNameAr}</h1>
        <p className='text-gray-400 text-sm'>({product?.productCapacity})</p>
        </div>
        ))}
        
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
      {isLoading? <Spiner /> : ''}

          {productsCategory.map((product => <CardItem key={product.id} product={product} />))}
          {/* {productsCategory.map((product => <CardItem key={product.id} product={product} />))} */}

      </div>

    </section>
    </>
  )
}

export default Category