// // utils/axiosConfig.js

// import axios from 'axios';

// const axiosInstance = axios.create({
// baseURL: 'https://elaf.onrender.com',
// });

// axiosInstance.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
