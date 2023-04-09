import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInstance";

const useLogin = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const loginRequest = (emailValue, passwordValue) => {
      setLoading(true);

      const newUser = {
         email: emailValue,
         password: passwordValue,
      };

      axiosInstance
         .post("login/", newUser)
         .then((res) => {
            if (res.status === 200) {
               sessionStorage.clear();
               Cookies.set("accessToken", res.data.access, { expires: 1 });
               Cookies.set("refreshToken", res.data.refresh, { expires: 1 });
               axiosInstance.interceptors.request.use((config) => {
                  config.headers.Authorization = `Bearer ${res.data.access}`;
                  return config;
               });

               navigate("/");
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };
   return [loginRequest, loading];
};

export default useLogin;
