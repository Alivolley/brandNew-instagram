import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useHome = () => {
   const [loading, setLoading] = useState(true);
   const [allHomePosts, setAllHomePosts] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getHomePostsRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`post/home/`)
         .then((res) => {
            if (res.status === 200) {
               setAllHomePosts(res.data.results);
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

   const getMoreHomePosts = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setAllHomePosts((prevPosts) => [...prevPosts, ...res.data.results]);
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

   return [getHomePostsRequest, getMoreHomePosts, loading, allHomePosts, nextUrl];
};
export default useHome;
