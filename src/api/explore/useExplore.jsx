import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useExplore = () => {
   const [loading, setLoading] = useState(true);
   const [allExplorePosts, setAllExplorePosts] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getExplorePostsRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`post/explore/`)
         .then((res) => {
            if (res.status === 200) {
               setAllExplorePosts(res.data.results);
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

   const getMoreExplorePosts = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setAllExplorePosts((prevPosts) => [...prevPosts, ...res.data.results]);
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

   return [getExplorePostsRequest, getMoreExplorePosts, loading, allExplorePosts, nextUrl];
};
export default useExplore;
