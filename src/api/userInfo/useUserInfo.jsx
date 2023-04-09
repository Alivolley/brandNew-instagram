import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const useUserInfo = () => {
   const [loading, setLoading] = useState(true);
   const { setUserInfos } = useContext(GeneralInfoContext);

   const userInfoRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`/`)
         .then((res) => {
            // setUserInfos()
            console.log(res);
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [userInfoRequest, loading];
};
export default useUserInfo;
