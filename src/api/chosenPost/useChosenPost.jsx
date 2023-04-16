import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useChosenPost = (postId) => {
   const [loading, setLoading] = useState(true);
   const [postDetail, setPostDetail] = useState({});

   const postDetailRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`post/detail/${postId}/`)
         .then((res) => {
            if (res.status === 200) {
               setPostDetail(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setLoading(false));
   };

   return [postDetailRequest, loading, postDetail];
};
export default useChosenPost;