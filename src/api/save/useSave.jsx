import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useSave = () => {
   const saveRequest = (postId, reloadRequest) => {
      axiosInstance
         .post(`post/save/${postId}/`)
         .then((res) => {
            console.log(res);
            if (res.status === 200) {
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

   return [saveRequest];
};
export default useSave;
