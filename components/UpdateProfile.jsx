import Link from 'next/link'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const UpdateProfile = () => {
    const [username , setUsername] = useState('محمد اشرف')
    const [password , setPassword] = useState('********')
    const [phone , setPhone] = useState('+201096454566')

    const handlePhoneChange = (value) => {
        setPhone(value); // Update the phone state with the new value
    };

  return (
    <section dir='rtl'>
        <div  className=''>

        <div className=' flex flex-col items-start'>
                        <div className=' flex flex-col justify-evenly items-start border border-gray-300 pb-8  max-lg:w-[500px] px-10 rounded-2xl max-sm:border-none'>
                <div className='p-5'>
                <Link scroll={false} className='font-semibold text-md text-gray-500  hover:text-black' href={'/profile'}>رجوع للخلف</Link>
                </div>
            <form className='flex mt-5 flex-col'>
                        <div className='flex'>
                                <div className=' rounded-full overflow-hidden w-24 h-24'>
                                    {/* Adjust width and height to your preference */}
                                    <img
                                    id='profile-pic'
                                    src={'/profile-pic.jpg'}
                                    width={200}
                                    alt='profile-pic'
                                    className='object-cover'
                                    />
                                </div>
                                
                        <div className="col flex flex-col justify-center items-start gap-2 mr-4">
                            <h1 className='font-bold text-lg'>محمد اشرف</h1>
                            <button dir='ltr' className='font-bold text-sm text-gray-500'>تغيير الصورة الشخصية</button>
                        </div>
                        </div>


                    <div className='mt-5'>
                            <div className='flex justify-between items-center gap-4  max-lg:flex-col  max-lg:items-start  max-lg:gap-6'>
                                <div className='flex flex-col gap-2'>
                                <label className='font-bold text-right  ml-auto text-md max-lg:text-sm'>اسم المستخدم</label>
                                <div className='relative'>
                                <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" className='bg-gray-100 outline-none w-[21rem] px-2 h-9 text-sm font-semibold text-gray-600  rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
                                autoComplete='username'
                                maxLength={25}
                                />
                                </div>
                                </div>

                                <div className='flex flex-col gap-2'>
                                <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>كلمة المرور</label>
                                <div className='relative'>
                                <input value={password} onChange={(e)=> setPassword(e.target.value)}  type="password" className='bg-gray-100 outline-none w-[21rem]  px-2 h-9 text-sm font-semibold text-gray-600 rounded shadow-sm max-lg:text-sm max-lg:w-[20rem] md:w-[20rem] '
                                autoComplete='password'
                                maxLength={20}
                                />
                                </div>
                                </div>
                            </div>


                            <div className='flex flex-col items-start w-[25rem] gap-2 mt-6'>
                                <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>رقم الهاتف</label>
                                <div className='relative bg-gray-100 rounded' dir='ltr'>
                                    <PhoneInput
                                    onChange={handlePhoneChange}
                                    inputStyle={{background:'rgba(243, 244,246,1)' , border:'none' , width:'21rem' , fontFamily:'Cairo' ,fontWeight:'semibold' , color:'gray'}}
                                    country={'eg'} // Default country
                                    value={phone}
                                    />
                                </div>
                            </div>

                            <div className='flex mt-8 justify-evenly items-center max-md:flex-col max-md:gap-4 max-lg:flex-col max-lg:gap-4 max-sm:ml-[18%]'>
                                <button className='bg-red text-white font-bold  w-[20rem]  pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>حفظ التغييرات</button>
                                <Link scroll={false} href={'/profile'} className='bg-white text-red font-bold border text-center  w-[20rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>الغاء</Link>
                            </div>

                    </div>
                    
        </form>
        </div>
    </div>
        </div>
    </section>
  )
}

export default UpdateProfile