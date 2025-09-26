'use client'
import { cartContext } from '@/Context/cartContext'
import { useUserContext } from '@/Context/userContext'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
  let {numOFItems , GetCart , setnumOFItems , totalPrice , cart , calculateTotalPrice , PostOrder ,getLoggedCart } = useContext(cartContext)
  const {userId} = useUserContext()
  const [userDetailsName , setUserDetailsName] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  // useEffect(() => {
  //   // saveUserData();
  //   fetchUserDetails()
  // }, []);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  
  useEffect(() => {
    calculateTotalPrice()
    getLoggedCart();
  }, [numOFItems]);
  



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);



  const toggleMenu = ()=> {
    if (setSidebarOpen)
    {
      setSidebarOpen(!sidebarOpen)
    }
  }
  
  const [dropdownVisibleMobiles, setDropdownVisibleMobiles] = useState(false);
  const [dropdownVisibleAccessories, setDropdownVisibleAccessories] = useState(false);
  const [dropdownVisibleCables, setDropdownVisibleCables] = useState(false);

  let timeoutId;

  const handleMouseOverMobiles = () => {
      clearTimeout(timeoutId);
      setDropdownVisibleMobiles(true);
  };

  const handleMouseLeaveMobiles = () => {
      timeoutId = setTimeout(() => {
          setDropdownVisibleMobiles(false);
      }, 200); // Adjust the delay time as needed
  };

  const handleMouseOverAccessories = () => {
      clearTimeout(timeoutId);
      setDropdownVisibleAccessories(true);
  };

  const handleMouseLeaveAccessories = () => {
      timeoutId = setTimeout(() => {
          setDropdownVisibleAccessories(false);
      }, 200); // Adjust the delay time as needed
  };

  const handleMouseOverCables = () => {
      clearTimeout(timeoutId);
      setDropdownVisibleCables(true);
  };

  const handleMouseLeaveCables = () => {
      timeoutId = setTimeout(() => {
          setDropdownVisibleCables(false);
      }, 200); // Adjust the delay time as needed
  };

  const handleDropdownMouseEnterMobiles = () => {
      clearTimeout(timeoutId);
  };

  const handleDropdownMouseLeaveMobiles = () => {
      setDropdownVisibleMobiles(false);
  };

  const handleDropdownMouseEnterAccessories = () => {
      clearTimeout(timeoutId);
  };

  const handleDropdownMouseLeaveAccessories = () => {
      setDropdownVisibleAccessories(false);
  };

  const handleDropdownMouseEnterCables = () => {
      clearTimeout(timeoutId);
  };

  const handleDropdownMouseLeaveCables = () => {
      setDropdownVisibleCables(false);
  };


  return (
    <>
     {/* Mobile */}
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 sm:hidden'>
        <Link href={'/'} className='flex justify-center items-center' >
        <img alt='logo' src='/logo.png' width={80} height={32.5} className='object-obtain'  />
        </Link>

        <button onClick={()=>toggleMenu()} style={{ maxWidth: '30px', maxHeight: '30px' }}>
            <Image alt='logo' src={'/menu.png'} width={30} height={30} className='object-obtain' />
        </button>

          {sidebarOpen && (
                              <div dir='rtl' className='z-10 dropdown show absolute top-[74px] right-0 bg-red text-white font-bold w-[300px] h-fit flex flex-col gap-3 items-start p-6 rounded-l-3xl'>
                                <div className='mt-5 flex flex-col gap-3'>
                                  {localStorage.getItem('name')?<p className='text-white pb-4'>مرحبا {localStorage.getItem('name')}</p>:<Link href='/login' onClick={()=> settoggleDropdown(false)}>تسجيل الدخول</Link>}
                                  <Link href='/'               onClick={()=> settoggleDropdown(false)}>الصفحة الرئيسية</Link>
                                  <Link href='/contact-us'  onClick={()=> setSidebarOpen(false)}>تواصل معنا</Link>
                                  <Link href='/wishlist'  onClick={()=> setSidebarOpen(false)}>المفضلة</Link>
                                  <Link href=''  onClick={toggleCategories}> الاقسام {categoriesOpen ?(<i className="fa-solid fa-angle-up text-sm"></i>):(<i className="fa-solid fa-angle-down text-sm"></i>)} </Link>
                                    <div className='flex flex-col justify-center items-start gap-2 text-sm' style={{ display: categoriesOpen ? 'flex' : 'none' }}>
                                    <Link href='/categories/smart-phones'  onClick={()=> setSidebarOpen(false)}>الهواتف الذكية</Link>
                                    <Link href='/categories/tablets'  onClick={()=> setSidebarOpen(false)}>الاجهزة اللوحية</Link>
                                    <Link href='/categories/smart-watches'  onClick={()=> setSidebarOpen(false)}>الساعات الذكية</Link>
                                    <Link href='/categories/airpods'  onClick={()=> setSidebarOpen(false)}>سماعات البلوتوث</Link>
                                    <Link href='/categories/accessories'  onClick={()=> setSidebarOpen(false)}>الاكسسوارات</Link>
                                    <Link href='/categories/chargers'  onClick={()=> setSidebarOpen(false)}>الشواحن</Link>
                                    <Link href='/categories/power-banks'  onClick={()=> setSidebarOpen(false)}>الشواحن المتنقله</Link>
                                    <Link href='/categories/cables'  onClick={()=> setSidebarOpen(false)}>الكابلات</Link>
                                    <Link href='/categories/used-devices'  onClick={()=> setSidebarOpen(false)}>الاجهزة المستعمله</Link>
                                    <Link href='/categories/discounts'  onClick={()=> setSidebarOpen(false)}>العروض والتخفيضات</Link>
                                    </div>
                                  </div>
                              </div>
                          )}

    </nav>

    <div className='sm:hidden mt-2 flex justify-center items-center relative'>
        <input type="text" className='bg-grey p-2 rounded-md w-full mx-6 font-semibold outline-none text-right px-11' placeholder='ابحث عن المنتجات' />
        <Image src={'/search.png'} width={20} height={20} className='absolute object-contain right-10' alt='search'/>
    </div>



  {/* Desktop */}

  <nav> 

    <div className='hidden sm:flex justify-between items-center p-3 px-10' dir='rtl'>
      <div className='flex items-center' id='icons'>
      <i className="fa-brands fa-twitter lg:text-2xl text-sm mr-3 "></i>
      <i className="fa-brands fa-instagram lg:text-2xl mr-3"></i>
      <i className="fa-brands fa-facebook-f lg:text-2xl mr-3"></i>
      </div>
      
      <div lang='ar' dir='rtl' className='flex items-center'>
      <h1 className="text-right sm:text-[10px] md:text-[14px] lg:text-lg text-sm  font-bold text-red animate-pulse">خصم 6% على المدفوعات الإلكترونية (مدي - فيزا - آبل باي - StcPay - تحويل) يصل لـ 199 ريالًا وأكثر</h1>
      </div>

      <div className='flex items-center'>
      <i className="fa-solid fa-x lg:text-xl text-red"></i>
      </div>

    </div>



    <div className='hidden sm:flex justify-between items-center p-3 max-md:text-xs bg-red text-white px-10' lang='ar' dir='rtl'>
      <div className='flex'>

                  <div className='flex items-center mr-3'> 
                  <i className="fa-solid fa-phone"></i>
                  <p className='mr-2'>201096454566+</p>
                  </div>

                  <span className='border-l-2 mr-2' />

                  <div className='flex items-center mr-3'>
                  <i className="fa-solid fa-envelope"></i>
                  <p className='mr-2'>mohamedashraf@gmail.com</p>
                  </div>

      </div>
        
      <div className='flex justify-between '>
        <div className='flex'>
        <img src="/saudi.png" width={20} height={20} alt="ar-logo"  />
        <p className='mr-2'>عربي</p> 
        </div>
        <span className='border-l-2 mr-2' />
        <Link href={'/wishlist'}>
        <p className='mr-2'>المفضلة</p>
        </Link>
        <span className='border-l-2 mr-2' />
        <Link href={'/contact-us'}>
        <p className='mr-2'>تواصل معنا</p>
        </Link>
      </div>

    </div>







    <div className='hidden sm:flex p-5 px-10 justify-between items-center ' lang='ar' dir='rtl'>
        <Link href={'/'} className='flex justify-center items-center' style={{ maxWidth: '150px', maxHeight: '61.08px' }}>
            <Image alt='logo' src={'/logo.png'} width={150} height={61.08} className='object-obtain' priority />
        </Link>


        <div className='w-full mt-2 flex justify-center items-center relative'>
            <input type="text" className='bg-grey p-3 rounded-md w-full mx-6 font-semibold outline-none text-right px-11' placeholder='ابحث عن المنتجات' />
            <Image src={'/search.png'} width={20} height={20} className='absolute object-contain right-10' alt='search'/>
        </div>


        <div className="flex justify-around items-center w-[400px] max-md:w-[500px] ">
              <div className='flex sm:text-sm items-center'>
                  <div className="col flex flex-col relative  items-center">
                    <Link href={'/profile'}>
                    <span className='bg-gray-100 absolute w-[30px] h-[30px] rounded-full -left-[9px] -top-3.5 hover:bg-gray-300'>
                  <i className="fa-regular fa-user absolute top-2 right-2 ">
                  </i>
                  </span>
                    </Link>
                  </div>

                  {localStorage.getItem('name')?
                    <div className="col flex flex-col mr-5">
                    <p className='text-grayy text-[14px] max-md:text-xs'>مرحبا بك</p>
                    <p className='text-black flex font-bold text-[14px] max-md:text-xs'>{localStorage.getItem('name')}</p>
                    </div>
                    :
                  <div className="col flex flex-col mr-5">
                    <Link href={'/login'}>
                    <p className='text-black flex font-bold text-[14px] max-md:text-xs'>تسجيل الدخول</p>
                    </Link>
                  </div>
                    }


              </div>

              
              <div className='flex sm:text-sm items-center'>
              <div className="col flex flex-col relative">
                <Link href={'/cart'}>
                    
                    <span className='bg-gray-100 absolute w-[30px] h-[30px] rounded-full -left-2.5 -top-3.5 hover:bg-gray-300'>
                      <i className="fa-solid fa-bag-shopping absolute top-2 left-2.5"></i>
                    </span>
                    </Link>
                  </div>

                  <div className="col flex flex-col mr-5 relative">
                    <p className='text-grayy text-[14px] max-md:text-xs mr-2'>السلة</p>
                    <span id='cart-count' className='absolute bg-red w-[20px] h-[20px] rounded-full text-white text-center text-[12px] font-bold'>{numOFItems}</span>
                    <p className='text-black font-bold text-right max-md:text-xs'>{totalPrice} رس</p>
                  </div>
              </div>

        </div>
</div>
{/* <div className='hidden sm:flex relative justify-between items-center p-3  sm:gap-4 2xl:gap-0 bg-red text-white px-10' lang='ar' dir='rtl'> */}

        <div className='md:px-10 desktop-nav hidden sm:flex relative justify-between items-center max-sm:gap-4 p-3 text-sm gap-0 bg-red text-white' lang='ar' dir='rtl'>


          <div className='' onMouseLeave={handleMouseLeaveMobiles}>
          <Link href='/categories/smart-phones' onMouseOver={handleMouseOverMobiles} className="group relative hover:text-black">
                الهواتف الذكية <span className='group-hover:animate-pulse mr-[1px] max-md:hidden'><i className="fa-solid fa-chevron-down text-[10px]"></i></span>
            </Link>
            <div id='mobiles-dropdown' onMouseEnter={handleDropdownMouseEnterMobiles} onMouseLeave={handleDropdownMouseLeaveMobiles} className={`fade-in-slide-down shadow-md transition-opacity ease-in-out duration-300 ${dropdownVisibleMobiles ? 'flex' : 'hidden'} justify-evenly items-center text-center  w-5/6  right-0 absolute top-[44px] z-10 bg-white px-10 py-5 border border-gray-500`}>
                  <div className="col flex flex-col items-start gap-4">
                  <h1 className='font-bold text-black'>الفئات</h1>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/mobiles/samsung'}>سامسونج</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/mobiles/realme'}>ريلمي</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black'  href={'/mobiles/oppo'}>اوبو</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/mobiles/iphone'}>ايفون</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/mobiles/infinix'}>انفينكس</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/mobiles/huawei'}>هاواوي</Link>
                  </div>
                  <div className="col flex flex-col justify-center items-center gap-4" dir='ltr'>
                  <div className="row flex flex-row items-center gap-3">
                  <Link  className='font-bold text-gray-600' href={'/mobiles/samsung'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/samsung.png'} alt='samsung' width={150} height={150} priority />
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/realme'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/realme.png'} alt='realme' width={150} height={150} priority />
                  </Link>
                  <Link  className='font-bold text-gray-600'  href={'/mobiles/oppo'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/oppo.png'} alt='oppo' width={150} height={150}  priority/>
                  </Link>
                  </div>

                  <div className="row flex flex-row items-center gap-3">            
                  <Link  className='font-bold text-gray-600' href={'/mobiles/iphone'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/iphone.png'} alt='iphone' width={150} height={150} priority />
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/huawei'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/huawei.png'} alt='huawei' width={150} height={150} priority />
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/infinix'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/infinix.png'} alt='infinix' width={150} height={150} priority />
                  </Link>
                  </div>
                  </div>
                  </div>
          </div>
          
          <Link href='/categories/tablets' className='hover:text-black'>الاجهزة اللوحية</Link>
          <Link href='/categories/smart-watches' className='hover:text-black' >الساعات الذكية</Link>
          <Link href='/categories/airpods' className='hover:text-black'>سماعات البلوتوث</Link>







          <div className='' onMouseLeave={handleMouseLeaveAccessories}>
          <Link href='/categories/accessories' onMouseOver={handleMouseOverAccessories} className="group relative hover:text-black">
                الاكسسوارات<span className='group-hover:animate-pulse mr-[4px] max-md:hidden'><i className="fa-solid fa-chevron-down text-[10px]"></i></span>
            </Link>
            <div id='mobiles-dropdown' onMouseEnter={handleDropdownMouseEnterAccessories} onMouseLeave={handleDropdownMouseLeaveAccessories} className={`fade-in-slide-down shadow-md transition-opacity ease-in-out duration-300 ${dropdownVisibleAccessories ? 'flex' : 'hidden'} justify-evenly items-center text-center w-5/6 right-0 absolute top-[44px] z-10 bg-white px-10 py-5 border border-gray-500`}>
                  <div className="col flex flex-col items-start gap-4">
                  <h1 className='font-bold text-black'>الفئات</h1>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>بكجات حماية</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>استيكرات حماية</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black'  href={'/'}>استيكرات</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>سماعات سلكية</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>ستيكر</Link>
                  </div>
                  <div className="col flex flex-col justify-center items-center gap-4" dir='ltr'>
                  <div className="row flex flex-row items-center gap-3">
                  <Link  className='font-bold text-gray-600' href={'/mobiles/samsung'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/samsung.png'} alt='samsung' width={150} height={150}priority />
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/realme'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/realme.png'} alt='realme' width={150} height={150} priority/>
                  </Link>
                  <Link  className='font-bold text-gray-600'  href={'/mobiles/oppo'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/oppo.png'} alt='oppo' width={150} height={150} priority/>
                  </Link>
                  </div>

                  <div className="row flex flex-row items-center gap-3">            
                  <Link  className='font-bold text-gray-600' href={'/mobiles/iphone'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/iphone.png'} alt='iphone' width={150} height={150}priority />
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/huawei'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/huawei.png'} alt='huawei' width={150} height={150} priority/>
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/infinix'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/infinix.png'} alt='infinix' width={150} height={150} priority/>
                  </Link>
                  </div>
                  </div>
                  </div>
          </div>




          <Link href='/categories/chargers' className='hover:text-black'>الشواحن</Link>
          <Link href='/categories/power-banks' className='hover:text-black'>الشواحن المتنقله</Link>
          
          





          <div className='' onMouseLeave={handleMouseLeaveCables}>
          <Link href='/categories/cables' onMouseOver={handleMouseOverCables} className="group relative hover:text-black">
                الكابلات<span className='group-hover:animate-pulse mr-[4px] max-md:hidden'><i className="fa-solid fa-chevron-down text-[10px]"></i></span>
            </Link>
            <div id='mobiles-dropdown' onMouseEnter={handleDropdownMouseEnterCables} onMouseLeave={handleDropdownMouseLeaveCables} className={`fade-in-slide-down shadow-md transition-opacity ease-in-out duration-300 ${dropdownVisibleCables ? 'flex' : 'hidden'} justify-evenly items-center text-center  w-5/6  right-0 absolute top-[44px] z-10 bg-white px-10 py-5 border border-gray-500`}>
                  <div className="col flex flex-col items-start gap-4">
                  <h1 className='font-bold text-black'>الفئات</h1>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>Type-C</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black' href={'/'}>Lightining</Link>
                  <Link  className='font-bold text-gray-500 hover:text-black'  href={'/'}>Usb</Link>

                  </div>
                  <div className="col flex flex-col justify-center items-center gap-4" dir='ltr'>
                  <div className="row flex flex-row items-center gap-3">
                  <Link  className='font-bold text-gray-600' href={'/mobiles/samsung'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/samsung.png'} alt='samsung' width={150} height={150} priority/>
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/realme'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/realme.png'} alt='realme' width={150} height={150}priority />
                  </Link>
                  <Link  className='font-bold text-gray-600'  href={'/mobiles/oppo'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/oppo.png'} alt='oppo' width={150} height={150}priority />
                  </Link>
                  </div>

                  <div className="row flex flex-row items-center gap-3">            
                  <Link  className='font-bold text-gray-600' href={'/mobiles/iphone'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/iphone.png'} alt='iphone' width={150} height={150} priority/>
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/huawei'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/huawei.png'} alt='huawei' width={150} height={150} priority/>
                  </Link>
                  <Link  className='font-bold text-gray-600' href={'/mobiles/infinix'} style={{ maxWidth: '150px', maxHeight: '150px' }}>
                    <Image src={'/infinix.png'} alt='infinix' width={150} height={150}priority />
                  </Link>
                  </div>
                  </div>
                  </div>
          </div>






          <Link href='/categories/used-devices' className='hover:text-black'>الاجهزة المستعمله</Link>
          <Link href="/categories/discounts"  className='hover:text-black'>العروض والتخفيضات</Link>


        </div>
      
</nav>
</>
  )
}

export default Navbar