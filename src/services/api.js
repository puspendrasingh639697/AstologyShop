


import axios from 'axios';

// Backend ka base URL (development ke liye localhost)
const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Agar refresh token httpOnly cookie mein save hai toh ye zaroori hai
});

// 1. Request Interceptor: Har API request ke sath automatically Access Token attach karne ke liye
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 2. Response Interceptor: Token expiry (401) handle karne aur Refresh Token se naya token lene ke liye
API.interceptors.response.use(
    (response) => response, // Agar response theek hai toh seedha pass kar do
    async (error) => {
        const originalRequest = error.config;

        // Agar error 401 (Unauthorized) hai aur request pehle retry nahi hui hai
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // Infinite loop bachane ke liye flag set kiya

            try {
                // Backend par refresh token request bhej rahe hain
                const { data } = await axios.post('http://localhost:5000/api/auth/refresh-token', {}, {
                    withCredentials: true // Cookie bhejne ke liye
                });

                if (data.token) {
                    // Naya token localStorage mein save karein
                    localStorage.setItem('token', data.token);

                    // Naye token ko original request ke header mein lagakar dobara bhej dein
                    originalRequest.headers.Authorization = `Bearer ${data.token}`;
                    return API(originalRequest);
                } else {
                    // Agar refresh token kaam nahi kar raha, toh SIRF token remove karo, login par mat bhejo
                    localStorage.removeItem('token');
                }
            } catch (refreshError) {
                // Agar refresh token bhi expire ho gaya ho, toh SIRF token remove karo, login par mat bhejo
                console.error("Refresh token expired. Logging out...");
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                localStorage.removeItem('user');
                
                // ❌ YE LINE HATA DI HAI (Taaki Add to Cart par wapas login na aaye)
                // window.location.href = '/login'; 
                
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default API;