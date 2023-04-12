import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useFollowers = (username) => {
   const [loading, setLoading] = useState(true);
   const [followersData, setFollowersData] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getFollowersRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`accounts/${username}/followers/`)
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
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setLoading(false));
   };

   return [getFollowersRequest, getMoreFollowers, loading, followersData, nextUrl];
};
export default useFollowers;
