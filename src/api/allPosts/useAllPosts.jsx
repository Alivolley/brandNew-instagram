import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useAllPosts = (username) => {
   const [loading, setLoading] = useState(true);
   const [allPosts, setAllPosts] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getPostsRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`accounts/posts/${username}/`)
         .then((res) => {
            if (res.status === 200) {
               setAllPosts(res.data.results);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   const getMorePosts = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setAllPosts((prevPosts) => [...prevPosts, ...res.data.results]);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [getPostsRequest, getMorePosts, loading, allPosts, nextUrl];
};
export default useAllPosts;
