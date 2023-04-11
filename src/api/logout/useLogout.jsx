import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import Cookies from "js-cookie";

const useLogout = () => {
   const [loading, setLoading] = useState(false);

   const logoutRequest = () => {
      setLoading(true);

      axiosInstance
         .post(`auth/logout/`, {
            refresh_token: Cookies.get("refreshToken"),
         })
         .then((res) => {
            console.log(res);
            if (res.status === 204) {
               Cookies.remove("accessToken");
               Cookies.remove("refreshToken");
               location.href = "/login";
               axiosInstance.interceptors.response.clear();
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [logoutRequest, loading];
};
export default useLogout;
