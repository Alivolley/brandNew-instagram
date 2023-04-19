import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useFollow = () => {
   const [loading, setLoading] = useState(false);

   const followRequest = (userId, reloadRequest) => {
      setLoading(true);

      axiosInstance
         .post(`accounts/follow/${userId}/`)
         .then((res) => {
            if (res.status === 201 && reloadRequest) {
               toast.success("You followd this user", {
                  autoClose: 5000,
                  theme: "colored",
               });
               reloadRequest();
            } else if (res.status === 204 && reloadRequest) {
               toast.success("You have unfollowd this user", {
                  autoClose: 5000,
                  theme: "colored",
               });
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
