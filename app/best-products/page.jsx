'use client'
import CardItem from '@/components/CardItem'
import Spiner from '@/components/Spiner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Best = () => {
    const [isLoading , setIsLoading] = useState(false)
    const [bestProducts , setBestProducts] = useState([])
  
  
  
    const getBestProducts = ()=>{
      setIsLoading(true)
      axios.get('http://localhost:4000/products/best')
      .then((response) => {
        setIsLoading(false)
        console.log(response);
        setBestProducts(response.data.result)
      })
      .catch((error)=> {
        console.log(error);
      })
    }
  
  
    useEffect(()=>{
      getBestProducts()
    },[])
  
    return (
      <section>
        <title>افضل المنتجات</title>
  
      <div className='mt-10 p-10' dir='rtl'>
          <div className='flex justify-between items-center'>
                  <h1 className='font-bold text-2xl'>افضل المنتجات</h1>
          </div>
  
          <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
            {isLoading? <Spiner /> : ''}
            {bestProducts?.map((product => <CardItem key={product?.id} product={product} />))}
        </div>
      </div>
      </section>
    )
}

export default Best