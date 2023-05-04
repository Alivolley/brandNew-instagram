import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const accessToken = Cookies.get('accessToken');
const refreshToken = Cookies.get('refreshToken');

const axiosInstance = axios.create({
   baseURL: 'https://djangoinsta.pythonanywhere.com/',
   headers: {
      'Content-Type': 'application/json',
      ...(accessToken && {
         Authorization: `Bearer ${accessToken}`,
      }),
   },
});

axiosInstance.interceptors.response.use(
   response => {
      return response;
   },
   async error => {
      console.log(error);
      const originalReq = error.config;
      if (error?.response?.data?.code === 'token_not_valid') {
         if (refreshToken) {
            try {
               const res = await axiosInstance.post('auth/login/refresh/', {
                  refresh: refreshToken,
               });
               Cookies.set('accessToken', res.data.access, { expires: 1 });
               originalReq.headers.Authorization = `Bearer ${res.data.access}`;
               return await axiosInstance(originalReq);
            } catch (err) {
               return console.log(err);
            }
         } else {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            axiosInstance.interceptors.response.clear();
            location.href = '/login';
         }
      } else if (error?.response?.status === 410) {
         Cookies.remove('accessToken');
         Cookies.remove('refreshToken');
         axiosInstance.interceptors.response.clear();
         location.href = '/login';
      } else if (error?.response?.status === 500) {
         toast.error('500 Internal Server Error', {
            autoClose: 5000,
            theme: 'colored',
         });
      } else {
         return Promise.reject(error);
      }
   }
);

export default axiosInstance;
