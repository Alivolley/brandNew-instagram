import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useLike = () => {
   const likeRequest = (postId) => {
      axiosInstance
         .post(`post/like/${postId}/`)
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

   return [likeRequest];
};
export default useLike;
