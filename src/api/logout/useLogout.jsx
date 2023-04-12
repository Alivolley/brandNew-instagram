import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

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
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setLoading(false));
   };

   return [logoutRequest, loading];
};
export default useLogout;
