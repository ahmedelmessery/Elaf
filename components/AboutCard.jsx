import Image from 'next/image'
import React from 'react'

const AboutCard = ({item}) => {
  return (
    <>
    
              <div key={item.id} className="row flex flex-row  max-md:flex-col-reverse max-md:gap-6 justify-between items-center gap-20">
              <div className="col  max-md:mt-4 ">
                <h1 className='font-bold text-lg text-gray-600 '>{item.title}</h1>
                <p className='mt-4 font-bold max-w-screen-xl text-justify'>{item.description}</p>
              </div>
              <div className="col">
                <Image src={'/about1.jpg'} width={450} height={450} alt='vision' className='object-contain '/>
              </div>
          </div>

    </>
  )
}

export default AboutCard