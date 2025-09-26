'use client'
import axios from 'axios';
import React, { useRef, useState } from 'react'

const ConfirmOtp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '','','','']);
  const inputRefs = useRef([]);


  const handleChange = (index, value) => {
    if (value.length > 1) return; // Allow only single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

        // Move focus to next input
        if (value && index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      // Move focus to previous input when backspace is pressed and current input is empty
      inputRefs.current[index - 1].focus();
    }
  };


  const handleNext = (e) => {
    e.preventDefault()
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
      
    try {
      let response = axios.post('forgetPassword', {
        code: enteredOtp
      });
      console.log(response);
      if (response.status === 200) {
        toast.success('Reset Code Sent Successfully');
        router.push('/update-password')
      } 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrApiMsg(error.response.data.message);
      } else {
        console.error('Error:', error);
      }
    }
  };





  // async function SubmitHandler(event) {
  //   event.preventDefault(); 
  //   try {
  //     let response = await axios.post('http://localhost:4000/forgetPassword', {
  //       code: enteredOtp
  //     });
  //     console.log(response);
  //     if (response.status === 200) {
  //       toast.success('Reset Code Sent Successfully');
  //       router.push('/update-password')
  //     } 
  //   } catch (error) {
  //     if (error.response && error.response.data && error.response.data.message) {
  //       setErrApiMsg(error.response.data.message);
  //     } else {
  //       console.error('Error:', error);
  //     }
  //   }
  // }
  
  









  return (
    <>
       <title>تأكيد رمز التحقق</title>

    <form className='login w-full text-center m-auto py-20' dir='rtl'>
        <div className='flex flex-col justify-center items-center m-auto w-6/12 py-20 border border-gray-300 max-md:w-3/5 max-sm:py-10 max-sm:border-none gap-4'>
            <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='font-bold text-xl'>كود التفعيل</h1>
            <p className='text-gray-500 font-semibold text-sm'>تم إرسال الكود علي البريد الإلكتروني *****</p>
            </div>

          <div className='flex flex-col justify-center items-center gap-2 mt-5' dir='ltr'>
            <label className='font-bold text-right ml-auto text-md max-lg:text-sm'>الكود</label>
            <div className='flex flex-wrap justify-center gap-2'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}  
                  style={{ width: '40px'}}
                  className={`${digit ? 'border border-gray-400' : ''} font-bold text-lg bg-gray-100 outline-none w-[5rem] text-center py-2 shadow-sm max-lg:text-sm max-lg:w-[20rem]`}
                />
                ))}
              </div>
            </div>

            <p dir='rtl' className='text-center text-gray-400 mt-5 font-bold text-xs  max-lg:text-xs'>ستنتهي صلاحية الكود خلال 60 ثانية  <button onClick={()=>{}} className='text-black hover:text-red font-bold mr-2 transition duration-200'>أعد الإرسال </button></p>

          <div className='flex justify-between flex-col items-center gap-3 mt-5'>
            <button onClick={handleNext}  className='bg-red text-white font-bold  w-[25rem] pr-2 py-2 rounded shadow-sm max-lg:w-[20rem] max-lg:text-sm hover:shadow-md transition duration-200'>تأكيد</button>
          </div>


        </div>
      </form>

  </>
  )
}

export default ConfirmOtp