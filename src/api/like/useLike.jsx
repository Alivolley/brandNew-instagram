import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useLike = () => {
   const likeRequest = (postId, reloadRequest) => {
      axiosInstance
         .post(`post/like/${postId}/`)
         .then((res) => {
            if (res.status === 201) {
               reloadRequest();
            } else if (res.status === 204) {
               reloadRequest();
            }
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
