import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useGetInfoSetting = () => {
   const [loading, setLoading] = useState(true);

   const infoSettingRequest = (setNameValue, setUsernameValue, setBioValue, setEmailValue, setGenderValue, setSuggestionValue, setProfilePhoto) => {
      setLoading(true);

      axiosInstance
         .get("edit/profile/")
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
         .catch((err) => console.log(err))
         .finally(() => setLoading(false));
   };

   return [infoSettingRequest, loading];
};
export default useGetInfoSetting;
