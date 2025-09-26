const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: 'https://elaf.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Include token if available
    }
});