import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useProfile = (username) => {
   const [loading, setLoading] = useState(true);
   const [profileInfos, setProfileInfos] = useState({});

   const profileDetailRequest = () => {
      setLoading(true);

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
         .finally(() => {
            setTimeout(() => {
               setLoading(false);
            }, 5000);
         });
   };

   return [profileDetailRequest, loading, profileInfos];
};
export default useProfile;
