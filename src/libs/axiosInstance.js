import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://djangoinsta.pythonanywhere.com/",
});

export default axiosInstance;
