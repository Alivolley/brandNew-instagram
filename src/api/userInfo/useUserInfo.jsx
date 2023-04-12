import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import { toast } from "react-toastify";

const useUserInfo = () => {
   const [loading, setLoading] = useState(true);
   const { setUserInfos } = useContext(GeneralInfoContext);

   const userInfoRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`accounts/user_information/`)
         .then((res) => {
            if (res.status === 200) {
               setUserInfos(res.data);
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

   return [userInfoRequest, loading];
};
export default useUserInfo;
