import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useDeleteProfilePhoto = () => {
   const [deleteLoading, setDeleteLoading] = useState(false);

   const deleteProfilePhotoRequest = (getInfoEdit, handleClose) => {
      setDeleteLoading(true);

      axiosInstance
         .delete("edit/profile_photo/")
         .then((res) => {
            if (res.status === 200) {
               getInfoEdit();
               handleClose();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setDeleteLoading(false));
   };

   return [deleteProfilePhotoRequest, deleteLoading];
};
export default useDeleteProfilePhoto;
