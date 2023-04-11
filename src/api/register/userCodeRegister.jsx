import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInstance";

const userCodeRegister = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const registerCodeRequest = (newUser) => {
      setLoading(true);

      axiosInstance
         .post("auth/register_user/", newUser)
         .then((res) => {
            if (res.status === 200) {
               sessionStorage.clear();
               Cookies.set("accessToken", res.data.tokens.access, { expires: 1 });
               Cookies.set("refreshToken", res.data.tokens.refresh, { expires: 1 });
               axiosInstance.interceptors.request.use((config) => {
                  config.headers.Authorization = `Bearer ${res.data.tokens.access}`;
                  return config;
               });

               navigate("/");
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [registerCodeRequest, loading];
};
export default userCodeRegister;
