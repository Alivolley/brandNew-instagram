import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useCreatePost = () => {
   const [loading, setLoading] = useState(false);

   const sendPostRequest = (newPost) => {
      setLoading(true);

      axiosInstance
         .post("post/create/", newPost, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         })
         .then((res) => {
            if (res.status === 201) {
               toast.success("Post created successfully", {
                  autoClose: 5000,
                  theme: "colored",
               });

               location.reload();
            }
         })
         .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
               toast.error("You must send a file", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else if (err.response.status === 400) {
               toast.error("File format not supported", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else {
               toast.error("Somthing went wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            }
         })
         .finally(() => setLoading(false));
   };

   return [sendPostRequest, loading];
};
export default useCreatePost;
