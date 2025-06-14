'use client'
import OrderIdCard from '@/components/OrderIdCard'
import { Steps } from 'antd'
import axios from 'axios'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const OrderDetails = () => {
  let id = useParams()
  let orderId = id.orderid
  
  const [orderDetails , serOrderDetails] = useState([])
  const GetOrderDetails = async ()=>{
    return await axios.get(`api/v1/order/${orderId}`)
    .then(res => {
      console.log(res)
      serOrderDetails(res.data.result)
      // console.log(orderDetails)

    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    console.log(orderDetails); // Log orderDetails when it's updated
  }, [orderDetails]);
  
  useEffect(()=> {
    GetOrderDetails()
  },[])

  const dateString = orderDetails.createdAt;
  const date = moment(dateString);
  const normalDateFormat = date.format('YYYY-MM-DD');


  return (
    <>
   <title>{orderDetails.orderCode}</title>

    <section dir='rtl' className='p-10 w-full'>
          <div>
          <h1 className='font-bold text-2xl text-red text-center'>طلباتي</h1>
          <hr className='mt-10'/>
        </div>

      <div className='flex justify-between items-center p-5'>
        <Link className='text-gray-500 hover:text-black hover:border-black font-bold px-8 py-3 rounded-md border border-gray-400 bg-transparent' href={'/orders'}>الرجوع الي الطلبات</Link>
        <Link className='text-red  font-bold px-8 py-3 rounded-md border hover:text-white hover:bg-red duration-300 transition border-red bg-transparent' href={'/'}>استكمال التسوق</Link>
      </div>

      <div className='flex flex-wrap justify-center items-start mx-10 gap-10 mt-4'>
            <div className="col flex flex-col gap-4">
              <OrderIdCard />



                <div className='flex flex-col items-start gap-5 p-5' dir='rtl'>
                    <div className='flex justify-between items-center w-full pb-5 border-b border-gray-300'>
                      <h1 className='font-bold text-gray-400'>تفاصيل السعر</h1>
                      <p className='font-bold '>890 رس</p>
                    </div>

                    <div className='flex justify-between items-center w-full '>
                    <h1 className='font-bold text-gray-400 text-sm'>الخصم</h1>
                      <p className='font-bold text-sm'>100 رس</p>
                    </div>

                    <div className='flex justify-between items-center w-full pb-5 border-b border-gray-300'>
                    <h1 className='font-bold text-gray-400 text-sm'>المدفوع</h1>
                      <p className='font-bold text-sm'>790 رس</p>
                    </div>

                    <div className='flex justify-between items-center w-full pb-5 border-b border-gray-300'>
                    <h1 className='font-bold text-red'>المدفوع</h1>
                      <p className='font-bold'>790 رس</p>
                    </div>
                </div>
            </div>



        <div className="col flex flex-col gap-2 w-5/12">
            <div className='flex justify-between items-start border-b border-gray-300 pb-4 max-sm:flex-col max-sm:gap-2 max-sm:justify-center max-sm:items-center'>
              <h1 className='font-bold max-sm:text-xs'>تتبع الطلب رقم</h1>
              <h1 className='font-bold max-sm:text-xs'>{orderDetails.orderCode}</h1>
            </div>

            <div className='mt-4 sflex flex-col'>
              <h2 className='text-sm font-bold text-gray-500 max-sm:text-xs'>الدفع عند الاستلام</h2>
                <div className='flex justify-start items-center gap-2 mt-2'>
                {/* <Image src={'/visa.png'} width={50} height={50} alt='visa' className='object-contain' /> */}
                {/* <p className='font-bold max-sm:text-xs'>5645 رس</p> */}
                </div>

                <div className='flex flex-col mt-5 max-sm:items-center max-sm:justify-center'>
                  {/* <h2 className='text-xs font-bold'>رقم الشحنة 1</h2> */}

                  <div dir='ltr' >
                    <Steps
                          className="custom-steps max-sm:w-[200px] max-sm:mt-5"
                          direction="vertical"
                          style={{}}
                          size="default"
                          current={orderDetails.orderStatus && orderDetails.orderStatus.length > 0 ? orderDetails.orderStatus[0].status : 0}
                          items={[
                            {
                              title: 'تم تنفيذ الطلب',
                              description: [normalDateFormat],
                            },
                            {
                              title: 'جاري مراجعة الطلب',
                              description:'جاري المراجعة',
                            },
                            {
                              title: 'تم شحن الطلب',
                              description: 'تم الشحن في 24 يناير 2024',
                            },
                            {
                              title: 'تم توصيل الطلب بنجاح',
                              description : 'تم التوصيل  في 26 يناير 2024',
                            },
                          ]}
                        />
                  </div>

                  <div className='flex justify-center items-center mt-20 gap-5 text-center'> 
                      <button className='px-15 py-2 rounded-md text-gray-700 hover:text-white bg-transparent  hover:bg-red hover:border-red transition duration-300 font-bold border border-red p-5' type="button">الغاء الطلب</button> 
                      <Link href={'/contact-us'} className='px-20 py-2 rounded-md text-red bg-transparent font-bold border border-red p-5'>الاتصال بالدعم</Link>
                  </div>

                </div>  
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default OrderDetails