'use client'
import { cartContext } from '@/Context/cartContext';
import DescriptionTap1 from '@/components/DescriptionTap1';
import DescriptionTap2 from '@/components/DescriptionTap2';
import ProductDetailsCard from '@/components/ProductDetailsCrad'
import { Radio, Select, Tabs } from 'antd';
import axios from 'axios';
import Image from 'next/image'
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const [productDetails , setProductDetails] = useState([])
  const [productComments , setProductComments] = useState([])
  const [colorValue, setColorValue] = useState(1);
  const [quantityValue, setQuantityValue] = useState(0);
  
  const handleOnQuantityChange = (quantityValue) => {
    setQuantityValue(quantityValue);
  };

  const {AddToCart , setnumOFItems} = useContext(cartContext)

  async function AddProduct(productId,productCount)
  {
    
    let response = await AddToCart(productId , productCount)
    if(response?.status === 200)
    {
      toast.success('تم اضافة المنتج الي عربة التسوق')
      setnumOFItems(response.data.numOfCartItems)
    }
    else
    {
      toast.error('يجب عليك تسجيل الدخول',{style:{color:'white'}})
    }
  }


  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const onChangeColor = (e) => {
      const selectedValue = e.target.value;
      if (selectedValue !== colorValue) {
        setColorValue(selectedValue);
      }
    };
    
    const params = useParams()
    const productId = params.productDetails

    const getProductDetails = ()=>{
      axios.get(`product/${productId}`)
      .then(res => {
        setProductDetails(res.data.result)
      })
      .catch(err => console.log(err))
    }


    const getProductComments = ()=>{
      axios.get(`products/comments/${productId}`)
      .then(res => {
        setProductComments(res.data.result)
      })
      .catch(err => console.log(err))
    }








    useEffect(()=>{
      getProductDetails()
      getProductComments()
    },[])
  








    const items = [
      {
        key: '1',
        label: 'الوصف',
        children: <DescriptionTap1 productDetails={productDetails}/>,
      },
      {
        key: '2',
        label: 'المراجعات والمنتجات ذات الصلة',
        children: <DescriptionTap2 productDetails={productDetails} productComments={productComments}/>,
      },
    ];

    


  return (
    <>
       <title>{productDetails?.productName}</title>

    <div className='p-10 flex justify-around items-center flex-wrap gap-10 max-sm:flex-col' dir='rtl'>
      <ProductDetailsCard productDetails={productDetails}/>
      <div className='flex justify-between items-start mx-10 '>


          <div className='flex flex-col justify-start items-start gap-4'>
            <h1 className='font-bold text-xl'>{productDetails?.productName}</h1>

            <div className='ml-auto flex gap-2 mt-4' dir='ltr'>
            {productDetails?.totalRates ? 
            <div className='flex' dir='ltr'>
            <Image src={'/star.png'} width={20} height={20} alt='start' className='object-contain' />
              <p className='font-bold '>{productDetails?.totalRates}</p> 
            </div>
            : ''}
            </div>


            <div className='flex justify-between items-center w-full mt-5'>
            <label htmlFor="size" className='font-bold text-red'>اختر المقاس :</label>
              <Select
                id='size'
                showSearch
                placeholder="اختر المقاس"
                optionFilterProp="children"
                filterOption={filterOption}
                options={[
                  {
                    value: 'صغير',
                    label: 'صغير',
                  },
                  {
                    value: 'متوسط',
                    label: 'متوسط',
                  },
                  {
                    value: 'كبير',
                    label: 'كبير',
                  },
                ]}
              />
            </div>



            <div className='flex justify-between items-center w-full mt-5'>
                <label htmlFor="colorSelect" className='font-bold text-red'>اختر اللون :</label>
                <Radio.Group className='flex justify-end items-center gap-2' onChange={onChangeColor} value={colorValue}>
                    <Radio value={1} className="radio-custom">
                        <div className={` p-1 rounded-md flex justify-between items-center ${colorValue === 1 ? 'border border-gray-400' : ''}`}>
                          <Image src={'/color1.png'} width={50} height={50} alt='visa' className='object-contain'/>
                        </div>
                    </Radio>
                    <Radio value={2} className="radio-custom">
                        <div className={` p-1 rounded-md flex justify-between items-center ${colorValue === 2 ? 'border border-gray-400' : ''}`}>
                          <Image src={'/color2.png'} width={50} height={50} alt='visa' className='object-contain'/>
                        </div>
                    </Radio>
                    <Radio value={3} className="radio-custom">
                        <div className={` p-1 rounded-md flex justify-between items-center ${colorValue === 3 ? 'border border-gray-400' : ''}`}>
                          <Image src={'/color3.png'} width={50} height={50} alt='visa' className='object-contain'/>
                        </div>
                    </Radio>
                </Radio.Group>
            </div>




            <div className='flex justify-between items-center w-full mt-5'>
                <label htmlFor="colorSelect" className='font-bold text-red'>الكمية:</label>
                  
          <Select
                id='size'
                placeholder="الكمية"
                optionFilterProp="children"
                onChange={handleOnQuantityChange}
                options={[
                  {
                    value: 1,
                    label: '1',
                  },
                  {
                    value: 2,
                    label: '2',
                  },
                  {
                    value: 3,
                    label: '3',
                  },
                  {
                    value: 4,
                    label: '4',
                  },
                  {
                    value: 5,
                    label: '5',
                  },
                  {
                    value: 6,
                    label: '6',
                  },
                  {
                    value: 7,
                    label: '7',
                  },
                  {
                    value: 8,
                    label: '8',
                  },
                  {
                    value: 9,
                    label: '9',
                  },
                  {
                    value: 10,
                    label: '10',
                  },
                ]}
              />
            </div>





            <div className='flex justify-between items-center w-full mt-5'>
                <label htmlFor="colorSelect" className='font-bold text-red'>السعر:</label>
                <div className='flex justify-end gap-5'>
                  <p className='font-bold'>{productDetails.price} رس</p>
                  {productDetails?.discountPrice ? <p className='text-gray-400 font-bold line-through'>{productDetails?.discountPrice} رس</p> : ''}
                </div>
            </div>




              <div className='flex justify-center items-center  mt-20 gap-5 w-full'>
                <button onClick={()=>AddProduct(productDetails?.id,quantityValue)} type="button" className='hover:shadow-lg transition duration-300 w-[20rem] max-sm:w-[10rem] px-30 py-3 bg-red text-white font-bold rounded-md'>أضف الي السلة</button>
                <button type="button" className='bg-white  py-3 px-4 rounded-lg border border-gray-400 '>
                <i className="fa-solid fa-heart text-gray-400 hover:text-red transition duration-300"></i>
                </button>
              </div>
          </div>
      </div>

    </div>


      <div dir='rtl'  id='TABS'>
        <Tabs defaultActiveKey="1" items={items}  />
      </div>
    </>
  )
}

export default ProductDetails