import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useFollowers = (username) => {
   const [loading, setLoading] = useState(true);
   const [followersData, setFollowersData] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getFollowersRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`${username}/followers/`)
         .then((res) => {
            if (res.status === 200) {
               setFollowersData(res.data.results);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   const getMoreFollowers = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setFollowersData((prevPosts) => [...prevPosts, ...res.data.results]);
               setNextUrl(res.data.next);
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [getFollowersRequest, getMoreFollowers, loading, followersData, nextUrl];
};
export default useFollowers;
