import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditInfoSetting = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editInfoSettingRequest = (newInfo, getInfoEdit) => {
      setEditReqLoading(true);

      axiosInstance
         .put("edit/profile/", newInfo)
         .then((res) => {
            if (res.status === 200) {
               getInfoEdit();
               toast.success("Information changed successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setEditReqLoading(false));
   };

   return [editInfoSettingRequest, editReqloading];
};
export default useEditInfoSetting;
