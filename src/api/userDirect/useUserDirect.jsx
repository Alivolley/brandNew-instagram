import { useState } from 'react';
import axiosInstance from '../../libs/axiosInstance';
import { toast } from 'react-toastify';

const useUserDirect = username => {
   const [loading, setLoading] = useState(true);
   const [allChats, setAllChats] = useState([]);

   const getAllChatRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`direct/${username}/`)
         .then(res => {
            console.log(res);
            // if (res.status === 200) {
            //    setAllChats(res.data);
            // }
         })
         .catch(err => {
            console.log(err);
            toast.error('Something went wrong', {
               autoClose: 5000,
               theme: 'colored',
            });
         })
         .finally(() => setLoading(false));
   };

   return [getAllChatRequest, loading, allChats];
};
export default useUserDirect;
