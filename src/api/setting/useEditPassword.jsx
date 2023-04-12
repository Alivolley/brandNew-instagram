import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditPassword = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editPasswordRequest = (newInfo) => {
      setEditReqLoading(true);

      axiosInstance
         .put("accounts/change/password/", newInfo)
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

            if (err.response.status === 404) {
               toast.error("The old password is wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else if (err.response.status === 400) {
               toast.error("The new password is too common", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else if (err.response.status === 403) {
               toast.error("The old and the new password can't be the same", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else {
               toast.error("Somthing went wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            }
         })
         .finally(() => setEditReqLoading(false));
   };

   return [editPasswordRequest, editReqloading];
};
export default useEditPassword;
