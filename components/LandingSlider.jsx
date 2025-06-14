'use client'
import React, { useEffect, useState } from 'react';

const data = [
  {
    image: "/phone22.png",
    text: "HUAWEI nova 11 Series",
    desc: "كاميرا امامية مزدوجة بورترية فائقة بدقة 60 MP | زجاج كونلون متين شحن 100 W HUAWEI Super Charge Turbo",
    button: 'تعرف علي المزيد',
    button2: 'شراء'
  },
  {
    image: "/phone.png",
    text: "اكتشف أحدث التقنيات في إيلاف - وجهتك الرقمية",
    desc: "جوالات عصرية ذات امكانيات عالية وسرعة فائقة تناسبك في جميع الوظائف مكونة من افضل القطع وذات كفاءة ممتازة"
  },
  {
    image: "/phone3.png",
    text: "اكتشف المجموعة المختارة من أجهزة التابلت عالية التقنية",
    desc: "تابلتات عصرية ذات امكانيات عالية وسرعة فائقة تناسبك في جميع الوظائف  مكونة من افضل القطع وذات كفاءة ممتازة"
  },
  {
    image: "/phone4.png",
    text: "اكتشف مجموعة الأجهزة الإلكترونية المختارة بدقة",
    desc: "اجهزة ذكية عصرية ذات امكانيات عالية وسرعة فائقة تناسبك في جميع الوظائف مكونة من افضل القطع وذات كفاءة ممتازة"
  },
  {
    image: "/phone5.png",
    text: "لدينا ايضا جميع انواع الاجهزة المستعملة",
    desc: "اجهزة مستعملة عصرية ذات امكانيات عالية وسرعة فائقة تناسبك في جميع الوظائف مكونة من افضل القطع وذات كفاءة ممتازة"
  },
];

const Dot = ({ active }) => (
  <span className={`dot ${active ? 'active' : ''}`}></span>
);

const LandingSlider = () => {
  const [index, setIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(data[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentContent(data[index]);
  }, [index]);

  return (
    <div className="w-full">
      <div className='flex justify-evenly items-center flex-row-reverse max-sm:flex-col relative' dir='rtl' >
              <div style={{ height: '400px' }}> {/* Set a fixed height for the container */}
              <img src={currentContent.image} alt="model" width={300} height={300} className='md:absolute md:top-[42px] left-0' />
            </div>
          <div className="col flex flex-col items-center justify-center gap-4 p-5 text-center max-sm:mt-20">
            <h1 className='rtl text-[16px]  md:text-lg lg:text-3xl font-bold text-center'>{currentContent.text}</h1>
            <p className='rtl max-sm:text-sm font-semibold text-center'>{currentContent.desc}</p>
          {currentContent?.button?  <div className='mt-20 max-md:mt-10 flex justify-between items-center gap-8 max-md:flex-col '>
              <button type="button" className='bg-red font-bold max-sm:text-sm  text-lg text-white px-12 py-5 rounded-xl' id='red-btn'>{currentContent.button}</button>
              <button type="button" className='bg-greyy hover:bg-gray-300 font-bold max-sm:text-sm  text-lg text-black px-12 py-5 rounded-xl'>{currentContent.button2}</button>
            </div>
            :''}
           
      </div>
      </div>

      <div className="dots flex justify-center items-center max-sm:mt-20">
        {data.map((_, i) => (
          <Dot key={i} active={i === index} />
        ))}
      </div>

      <div className='mt-20 border bg-grey'/>
    </div>
  );
};

export default LandingSlider;
