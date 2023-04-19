import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useRemoveFollower = () => {
   const removeRequest = (postId) => {
      axiosInstance
         .delete(`accounts/remove_follower/${postId}/`)
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

   return [removeRequest];
};
export default useRemoveFollower;
