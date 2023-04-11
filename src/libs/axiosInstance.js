import axios from "axios";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");
const refreshToken = Cookies.get("refreshToken");

const axiosInstance = axios.create({
   baseURL: "https://djangoinsta.pythonanywhere.com/",
   headers: {
      "Content-Type": "application/json",
      Authorization: accessToken ? `Bearer ${accessToken}` : null,
   },
});

axiosInstance.interceptors.response.use(
   (response) => {
      return response;
   },
   async (error) => {
      console.log(error);
      const originalReq = error.config;
      if (error?.response?.data?.code === "token_not_valid") {
         try {
            const res = await axiosInstance.post("auth/login/refresh/", {
               refresh: refreshToken,
            });
            Cookies.set("accessToken", res.data.access, { expires: 1 });
            originalReq.headers.Authorization = `Bearer ${res.data.access}`;
            return await axiosInstance(originalReq);
         } catch (err) {
            return console.log(err);
         }
      } else if (error?.response?.status === 410) {
         Cookies.remove("accessToken");
         Cookies.remove("refreshToken");
         location.href = "/login";
         axiosInstance.interceptors.response.clear();
      } else {
         return Promise.reject(error);
      }
   }
);

export default axiosInstance;
