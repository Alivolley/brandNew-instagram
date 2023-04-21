import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useCreateComment = () => {
   const [creatCommentLoading, setCreatCommentLoading] = useState(false);

   const createCommentRequest = (commentText, postId, setCommentValue, postDetailRequest) => {
      setCreatCommentLoading(true);

      axiosInstance
         .post(`post/comment/create/${postId}/`, {
            body: commentText,
         })
         .then((res) => {
            if (res.status === 201) {
               setCommentValue("");
               postDetailRequest();
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setCreatCommentLoading(false));
   };

   return [createCommentRequest, creatCommentLoading];
};
export default useCreateComment;
