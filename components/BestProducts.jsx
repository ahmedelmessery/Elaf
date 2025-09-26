import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import axios from 'axios'
import Spiner from './Spiner'

const FeaturedProducts = () => {
  const [isLoading , setIsLoading] = useState(false)
  const [bestProducts , setBestProducts] = useState([])



  const getBestProducts = ()=>{
    setIsLoading(true)
    axios.get('products/best')
    .then((response) => {
      setIsLoading(false)
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

{isLoading? <Spiner /> : ''}

    <div className='mt-10 p-10' dir='rtl'>
        <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>افضل المنتجات</h1>
                <Link href={'best-products'}>
                <h1 className='text-gray-500 text-sm animate-pulse' dir='rtl'>عرض المزيد <span><i className="fa-solid fa-caret-left"></i></span></h1>
                </Link>
        </div>

        <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
          {bestProducts.slice(0, 6).map((product => <CardItem key={product.id} product={product} />))}
      </div>
    </div>
    </section>
  )
}

export default FeaturedProducts