import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import axios from "axios";

const useSearch = () => {
   const [loading, setLoading] = useState(false);
   const [allSearchedUser, setAllSearchedUser] = useState([]);

   let cancel = null;

   useEffect(() => {
      return () => {
         setAllSearchedUser([]);
         if (cancel) {
            cancel();
         }
      };
   }, [cancel]);

   const searchRequest = (username) => {
      setLoading(true);
      setAllSearchedUser([]);

      axiosInstance
         .get(`accounts/search/${username}/`, {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
         })
         .then((res) => {
            if (res.status === 200) {
               setAllSearchedUser(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setLoading(false));
   };

   return [searchRequest, loading, allSearchedUser];
};
export default useSearch;
