"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const router = useRouter();

  const [userDetails, setUserDetails] = useState(null);
  const [userAddresses, setUserAddresses] = useState(null);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [address, setAddress] = useState([]);

  // ✅ نجيب البيانات من localStorage بعد ما الكومبوننت يركب (Client-Side فقط)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      const storedToken = localStorage.getItem("token");
      setUserId(storedUserId);
      setToken(storedToken);
      setUserData(storedToken);
    }
  }, []);

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  const fetchUserDetails = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(`api/v1/userdetails/${userId}`, { headers });
      localStorage.setItem("name", res.data.result.name);
      setUserDetails(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const AddAddresses = async () => {
    try {
      const res = await axios.get("api/v1/user/address", { headers });
      setUserAddresses(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getAddress = async () => {
    try {
      const res = await axios.get("api/v1/user/address", { headers });
      setAddress(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    setUserId(null);
    setToken(null);
    setUserDetails(null);
    router.push("/login");
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        logout,
        headers,
        userId,
        token,
        fetchUserDetails,
        userDetails,
        userAddresses,
        getAddress,
        address,
        AddAddresses,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
