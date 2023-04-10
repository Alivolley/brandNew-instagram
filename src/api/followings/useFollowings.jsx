import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useFollowings = (username) => {
   const [loading, setLoading] = useState(true);
   const [followingsData, setFollowingsData] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getFollowingsRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`${username}/following/`)
         .then((res) => {
            if (res.status === 200) {
               setFollowingsData(res.data.results);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   const getMoreFollowings = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setFollowingsData((prevPosts) => [...prevPosts, ...res.data.results]);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [getFollowingsRequest, getMoreFollowings, loading, followingsData, nextUrl];
};
export default useFollowings;
