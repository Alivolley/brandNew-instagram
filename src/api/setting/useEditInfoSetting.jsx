import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditInfoSetting = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editInfoSettingRequest = (newInfo) => {
      setEditReqLoading(true);

      axiosInstance
         .put("accounts/edit/profile/", newInfo)
         .then((res) => {
            if (res.status === 200) {
               toast.success("Information changed successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });
               location.reload();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setEditReqLoading(false));
   };

   return [editInfoSettingRequest, editReqloading];
};
export default useEditInfoSetting;
