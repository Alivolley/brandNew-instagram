import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useProfile = ({ username }) => {
   const [loading, setLoading] = useState(true);
   const [profileInfos, setProfileInfos] = useState({});

   const profileDetailRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`profile/${username}/`)
         .then((res) => {
            console.log(res);
            if (res.status === 200) {
               // setProfileInfos()
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [profileDetailRequest, loading, profileInfos];
};
export default useProfile;
