import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useEditProfilePhoto = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editProfilePhotoRequest = (newImage, getInfoEdit, handleClose) => {
      setEditReqLoading(true);

      axiosInstance
         .put("edit/profile_photo/", newImage, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         .then((res) => {
            if (res.status === 200) {
               getInfoEdit();
               handleClose();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setEditReqLoading(false));
   };

   return [editProfilePhotoRequest, editReqloading];
};
export default useEditProfilePhoto;
