import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useActivities = () => {
   const [loading, setLoading] = useState(true);
   const [allActivities, setAllActivities] = useState([]);
   const [nextUrl, setNextUrl] = useState("");

   const getActivitiesRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`accounts/activities/`)
         .then((res) => {
            if (res.status === 200) {
               setAllActivities(res.data.results);
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

   const getMoreActivities = () => {
      setLoading(true);

      axiosInstance
         .get(nextUrl)
         .then((res) => {
            if (res.status === 200) {
               setAllActivities((prevPosts) => [...prevPosts, ...res.data.results]);
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

   return [getActivitiesRequest, getMoreActivities, loading, allActivities, nextUrl];
};
export default useActivities;
