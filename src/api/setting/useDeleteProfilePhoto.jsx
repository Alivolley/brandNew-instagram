import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useDeleteProfilePhoto = () => {
   const [deleteLoading, setDeleteLoading] = useState(false);

   const deleteProfilePhotoRequest = () => {
      setDeleteLoading(true);

      axiosInstance
         .delete("accounts/edit/profile_photo/")
         .then((res) => {
            if (res.status === 200) {
               location.reload();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setDeleteLoading(false));
   };

   return [deleteProfilePhotoRequest, deleteLoading];
};
export default useDeleteProfilePhoto;
