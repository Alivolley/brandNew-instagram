import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useDoubleClickLike = () => {
   const doubleClickLikeRequest = (postId) => {
      axiosInstance
         .post(`post/like_double_click/${postId}/`)
         .then(() => {
            //
         })
         .catch((err) => {
            console.log(err);

            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         });
   };

   return [doubleClickLikeRequest];
};
export default useDoubleClickLike;
