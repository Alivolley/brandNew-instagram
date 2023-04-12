import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

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
         .catch((err) => {
            console.log(err);
            if (err.response.status === 400) {
               toast.error("This email or username is taken", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else if (err.response.status === 402) {
               toast.error("Password is too common", {
                  autoClose: 5000,
                  theme: "colored",
               });
            } else {
               toast.error("Something went wrong", {
                  autoClose: 5000,
                  theme: "colored",
               });
            }
         })
         .finally(() => setLoading(false));
   };
   return [registerRequest, loading];
};

export default useRegister;
