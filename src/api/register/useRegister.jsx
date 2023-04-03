import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useRegister = () => {
   const [loading, setLoading] = useState(false);

   const registerRequest = (usernameValue, emailValue, passwordValue, confirmValue) => {
      setLoading(true);

      const newUser = {
         username: usernameValue,
         email: emailValue,
         password: passwordValue,
         password2: confirmValue,
      };

      axiosInstance
         .post("register_email", newUser)
         .then((res) => console.log(res))
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };
   return [registerRequest, loading];
};

export default useRegister;
