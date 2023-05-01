import { useState } from 'react';
import axiosInstance from '../../libs/axiosInstance';
import { toast } from 'react-toastify';

const useAllDirects = () => {
   const [loading, setLoading] = useState(true);
   const [allDirects, setAllDirects] = useState([]);

   const getAllDirectsRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`direct/`)
         .then(res => {
            if (res.status === 200) {
               setAllDirects(res.data);
            }
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

   return [getAllDirectsRequest, loading, allDirects];
};
export default useAllDirects;
