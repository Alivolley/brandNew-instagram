import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useGetInfoSetting = () => {
   const [loading, setLoading] = useState(true);

   const infoSettingRequest = (setNameValue, setUsernameValue, setBioValue, setEmailValue, setGenderValue, setSuggestionValue, setProfilePhoto) => {
      setLoading(true);

      axiosInstance
         .get("accounts/edit/profile/")
         .then((res) => {
            if (res.status === 200) {
               setNameValue(res.data.name || "");
               setUsernameValue(res.data.username || "");
               setBioValue(res.data.bio || "");
               setEmailValue(res.data.email || "");
               setGenderValue(res.data.gender || "");
               setSuggestionValue(res.data.open_suggestions || "");
               setProfilePhoto(res.data.profile_photo || "");
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

   return [infoSettingRequest, loading];
};
export default useGetInfoSetting;
