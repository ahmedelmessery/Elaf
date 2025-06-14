'use client'
import CardItem from '@/components/CardItem'
import Spiner from '@/components/Spiner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const New = () => {
    const [isLoading , setIsLoading] = useState(false)
    const [recentProducts , setRecentProducts] = useState([])
  
  
  
    const getRecentProducts = ()=>{
      setIsLoading(true)
      axios.get('products/recent')
      .then((response) => {
        setIsLoading(false)
        setRecentProducts(response.data.result)
      })
      .catch((error)=> {
        console.log(error);
      })
    }
  
  
    useEffect(()=>{
      getRecentProducts()
    },[])
    return (
      <section>
        <title>منتجات جديدة</title>
  
      <div className='mt-10 p-10' dir='rtl'>
      <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>منتجات جديدة</h1>
        </div>
  
          <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
  {isLoading? <Spiner /> : ''}
            {recentProducts?.map((product => <CardItem key={product?.id} product={product} />))}
        </div>
      </div>
      </section>
    )
}

export default New