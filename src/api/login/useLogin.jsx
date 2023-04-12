import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

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
         .post("auth/login/", newUser)
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
         .catch((err) => {
            console.log(err);
            if (err?.response?.data?.detail === "No active account found with the given credentials") {
               toast.error("Email or password is wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else {
               toast.error("Somthing went wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            }
         })
         .finally(() => setLoading(false));
   };
   return [loginRequest, loading];
};

export default useLogin;
