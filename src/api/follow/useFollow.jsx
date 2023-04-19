import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useFollow = () => {
   const [loading, setLoading] = useState(false);

   const followRequest = (userId, reloadRequest) => {
      setLoading(true);

      axiosInstance
         .post(`accounts/follow/${userId}/`)
         .then(async (res) => {
            if (res.status === 201 || res.status === 204) {
               toast.success("Follow status changed", {
                  autoClose: 5000,
                  theme: "colored",
               });
               await reloadRequest();
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
