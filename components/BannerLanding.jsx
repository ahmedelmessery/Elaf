import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BannerLanding = () => {
  return (
   <section className='relative'>
    <div className='full-width-image'>
        <img className='h-[400px] w-full object-cover absolute' src='/airpods.jpg'/>
    <div className='overlay-banner z-10'/>
      <h1 className='relative z-20 flex justify-center items-center text-white font-black max-md:text-[25px] md:text-3xl lg:text-4xl  text-center'>ايربودز عالية المستوي<br/>بتصميم ممتاز ومبتكر</h1>

      
      <div className="banner-btn rounded-lg px-7 py-4 max-sm:p-2 mt-4" >
      <Link href={'/categories/airpods'} className="text-red font-bold text-lg max-md:text-sm" type="button">عرض كل الايربودز</Link>
      </div>
      
    </div>
   </section>
  )
}

export default BannerLanding