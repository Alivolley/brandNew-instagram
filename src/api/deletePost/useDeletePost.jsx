import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useDeletePost = (postId) => {
   const [deleteLoading, setDeleteLoading] = useState(false);

   const deletePostRequest = () => {
      setDeleteLoading(true);

      axiosInstance
         .delete(`post/delete/${postId}/`)
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

   return [deletePostRequest, deleteLoading];
};
export default useDeletePost;
