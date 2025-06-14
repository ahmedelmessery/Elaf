import Image from 'next/image'
import React from 'react'

const Banners = () => {
  return (
    <div className='container flex justify-center gap-10 m-auto items-center w-full max-sm:flex-col mt-10' dir='rtl'>
    <div className='bg-lightblack p-5 rounded-lg w-[500px] flex justify-between items-center max-sm:w-[350px] ad-container'>
      <div className="col flex flex-col gap-5">
        <h2 className='text-white text-lg font-bold'>Apple Watch Altra</h2>
        <p className='text-gray text-sm text-white'>اوبو A98 بشريحتين اتصال، 256 جيجابايت،8 جيجا رام، شبكة الجيل الخامس - ازرق ( ضمان دولي )</p>
        <h3 dir='rtl' className='text-white font-bold'>3.000 ر.س.</h3>
      </div>
      <div className="col">
        <Image src={'/apple-black.png'} width={400} height={400} alt='apple-watch'/>
      </div>
    <div className='overlay'/>
    </div>


    <div className='bg-mint p-5 rounded-lg w-[500px] flex justify-between items-center max-sm:w-[350px] ad-container'>
        <div className="col flex flex-col gap-5">
        <h2 className='text-white text-lg font-bold'>Apple Watch Altra</h2>
        <p className='text-gray text-sm text-white'>اوبو A98 بشريحتين اتصال، 256 جيجابايت،8 جيجا رام، شبكة الجيل الخامس - ازرق ( ضمان دولي )</p>
        <h3 dir='rtl' className='text-white font-bold'>3.000 ر.س.</h3>

        </div>
        <div className="col">
        <Image src={'/apple-mint.png'} width={400} height={400} alt='apple-watch'/>

        </div>
        <div className='overlay'/>

    </div>
</div>
  )
}

export default Banners