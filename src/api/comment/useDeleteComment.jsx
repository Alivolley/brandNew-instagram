import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useDeleteComment = (commentId, postDetailRequest) => {
   const [deleteLoading, setDeleteLoading] = useState(false);

   const deleteCommentRequest = (setShowDeletModal) => {
      setDeleteLoading(true);

      axiosInstance
         .delete(`post/comment/delete/${commentId}/`)
         .then((res) => {
            if (res.status === 204) {
               toast.success("Comment deleted successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });
               postDetailRequest();
               setShowDeletModal(false);
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

   return [deleteCommentRequest, deleteLoading];
};
export default useDeleteComment;
