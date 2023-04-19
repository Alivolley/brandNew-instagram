import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useProfile = (username) => {
   const [loading, setLoading] = useState(true);
   const [profileInfos, setProfileInfos] = useState({});

   useEffect(() => {
      setLoading(true);
   }, [username]);

   const profileDetailRequest = () => {
      axiosInstance
         .get(`accounts/profile/${username}/`)
         .then((res) => {
            if (res.status === 200) {
               setProfileInfos(res.data);
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

   return [profileDetailRequest, loading, profileInfos];
};
export default useProfile;
