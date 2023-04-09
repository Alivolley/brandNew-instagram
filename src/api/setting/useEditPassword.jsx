import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditPassword = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editPasswordRequest = (newInfo) => {
      setEditReqLoading(true);

      axiosInstance
         .put("change/password/", newInfo)
         .then((res) => {
            if (res.status === 200) {
               toast.success("password changed successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });
               location.reload();
            }
         })
         .catch((err) => {
            console.log(err);

            toast.error(err.response.data, {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setEditReqLoading(false));
   };

   return [editPasswordRequest, editReqloading];
};
export default useEditPassword;
