import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useSavedPosts = () => {
   const [loading, setLoading] = useState(true);
   const [savedPosts, setSavedPosts] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getSavedPostsRequest = () => {
      setLoading(true);

      axiosInstance
         .get("accounts/saved_posts/")
         .then((res) => {
            if (res.status === 200) {
               setSavedPosts(res.data.results);
               setNextUrl(res.data.next);
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

   const getMoreSavedPosts = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setSavedPosts((prevPosts) => [...prevPosts, ...res.data.results]);
               setNextUrl(res.data.next);
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

   return [getSavedPostsRequest, getMoreSavedPosts, loading, savedPosts, nextUrl];
};
export default useSavedPosts;
