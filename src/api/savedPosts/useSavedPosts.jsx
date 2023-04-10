import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useSavedPosts = () => {
   const [loading, setLoading] = useState(true);
   const [savedPosts, setSavedPosts] = useState([]);
   const [nextUrl, setNextUrl] = useState("");
   const [totalObjects, setTotalObjects] = useState(0);

   const getSavedPostsRequest = () => {
      setLoading(true);

      axiosInstance
         .get("saved_posts/")
         .then((res) => {
            if (res.status === 200) {
               setSavedPosts(res.data.results);
               setNextUrl(res.data.next);
               setTotalObjects(res.data.total_objects);
            }
         })
         .catch((err) => console.log(err))
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
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [getSavedPostsRequest, getMoreSavedPosts, loading, savedPosts, nextUrl, totalObjects];
};
export default useSavedPosts;
