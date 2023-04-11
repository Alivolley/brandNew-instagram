import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditProfilePhoto = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editProfilePhotoRequest = (newImage) => {
      setEditReqLoading(true);

      axiosInstance
         .put("accounts/edit/profile_photo/", newImage, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         .then((res) => {
            if (res.status === 200) {
               toast.success("Profile photo changed successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });
               location.reload();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setEditReqLoading(false));
   };

   return [editProfilePhotoRequest, editReqloading];
};
export default useEditProfilePhoto;
