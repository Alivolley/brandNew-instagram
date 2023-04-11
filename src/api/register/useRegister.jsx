import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInstance";

const useRegister = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const registerRequest = (usernameValue, emailValue, passwordValue, confirmValue) => {
      setLoading(true);

      const newUser = {
         username: usernameValue,
         email: emailValue,
         password: passwordValue,
         password2: confirmValue,
      };

      axiosInstance
         .post("auth/register_email/", newUser)
         .then((res) => {
            if (res.status === 200) {
               sessionStorage.setItem("detail", JSON.stringify(newUser));
               navigate("/registerCode");
            }
         })
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };
   return [registerRequest, loading];
};

export default useRegister;
