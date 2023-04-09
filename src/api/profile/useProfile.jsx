import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useProfile = () => {
   const [loading, setLoading] = useState(true);
   const [profileInfos, setProfileInfos] = useState({});

   const profileDetailRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`profile/ali/`)
         .then((res) => {
            console.log(res);
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [profileDetailRequest, loading];
};
export default useProfile;
