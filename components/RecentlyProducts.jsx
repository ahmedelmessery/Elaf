import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import axios from 'axios'
import Spiner from './Spiner'

const RecentlyProducts = () => {
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
      {isLoading? <Spiner /> : ''}

    <div className='mt-10 p-10' dir='rtl'>
        <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>وصل حديثا</h1>
                <Link href={'/new-products'}>
                <h1 className='text-gray-500 text-sm animate-pulse' dir='rtl'>عرض المزيد <span><i className="fa-solid fa-caret-left"></i></span></h1>
                </Link>
        </div>

        <div className='flex justify-between items-center flex-wrap p-5 gap-10 mt-10'>
          {recentProducts.slice(0, 6).map((product => <CardItem key={product.id} product={product} />))}
      </div>

    </div>
    </section>
  )
}

export default RecentlyProducts