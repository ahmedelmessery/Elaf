'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react';
import { cartContext } from './cartContext';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState('');
  const router = useRouter()
  const [userDetails, setUserDetails] = useState(null)
  const [userAddresses, setUserAddresses] = useState(null)
  let userId = localStorage.getItem('userId')

  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}` 
  };
  


  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`api/v1/userdetails/${localStorage.getItem('userId')}`);
      localStorage.setItem('name', res.data.result.name);
      setUserDetails(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  

  const AddAddresses = async () => {
    try {
      const res = await axios.get('api/v1/user/address');
      setUserAddresses(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  

  const [address, setAddress] = useState([]);

    const getAddress = async () => {
        return await axios.get('api/v1/user/address')
            .then(res => {
              setAddress(res.data.result)
            })
            .catch(err => {
                console.log(err);
            });
          }
  // const saveUserData = () => {
  //   const token = localStorage.getItem('token');
  //   setUserData(token);
  // };
  


  const logout = () => {
      localStorage.clear()
      fetchUserDetails()
      router.push('/login')
  };

  return (
    <UserContext.Provider value={{ userData, logout  ,headers , userId , token ,fetchUserDetails , userDetails , userAddresses , getAddress , address ,AddAddresses}}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
