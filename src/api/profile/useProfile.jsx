import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

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
         .catch((err) => console.log(err))
         .finally(() => {
            setTimeout(() => {
               setLoading(false);
            }, 5000);
         });
   };

   return [profileDetailRequest, loading, profileInfos];
};
export default useProfile;
