import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

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
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setDeleteLoading(false));
   };

   return [deleteProfilePhotoRequest, deleteLoading];
};
export default useDeleteProfilePhoto;
