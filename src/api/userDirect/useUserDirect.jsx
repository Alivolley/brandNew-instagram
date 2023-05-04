import { useState } from 'react';
import axiosInstance from '../../libs/axiosInstance';
import { toast } from 'react-toastify';

const useUserDirect = username => {
   const [userData, setUserData] = useState({});

   const getDirectUserData = () => {
      axiosInstance
         .get(`direct/${username}/`)
         .then(res => {
            if (res.status === 200) {
               setUserData(res.data);
            }
         })
         .catch(err => {
            console.log(err);
            toast.error('Something went wrong', {
               autoClose: 5000,
               theme: 'colored',
            });
         });
   };

   return [getDirectUserData, userData];
};
export default useUserDirect;
