import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const useLogout = () => {
   const [loading, setLoading] = useState(false);

   const logoutRequest = (setLogoutLoading) => {
      setLoading(true);
      setLogoutLoading && setLogoutLoading(true);

      axiosInstance
         .post(`auth/logout/`, {
            refresh_token: Cookies.get("refreshToken"),
         })
         .then((res) => {
            console.log(res);
            if (res.status === 204) {
               Cookies.remove("accessToken");
               Cookies.remove("refreshToken");
               axiosInstance.interceptors.response.clear();
               location.href = "/login";
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
            setLoading(false);
            setLogoutLoading(false);
         });
   };

   return [logoutRequest, loading];
};
export default useLogout;
