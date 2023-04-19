import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useFollow = () => {
   const [loading, setLoading] = useState(false);

   const followRequest = (userId, reloadRequest) => {
      setLoading(true);

      axiosInstance
         .post(`accounts/follow/${userId}/`)
         .then(() => {
            if (reloadRequest) {
               reloadRequest();
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

   return [followRequest, loading];
};
export default useFollow;
