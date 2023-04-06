import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const useEditInfoSetting = () => {
   const [editReqloading, setEditReqLoading] = useState(false);

   const editInfoSettingRequest = () => {
      setEditReqLoading(true);

      axiosInstance
         .put("edit/profile/")
         .then((res) => {
            console.log(res);
            // if (res.status === 200) {
            //    setNameValue(res.data.name);
            //    setUsernameValue(res.data.username);
            //    setBioValue(res.data.bio);
            //    setEmailValue(res.data.email);
            //    setGenderValue(res.data.gender);
            //    setSuggestionValue(res.data.open_suggestions);
            // }
         })
         .catch((err) => console.log(err))
         .finally(() => setEditReqLoading(false));
   };

   return [editInfoSettingRequest, editReqloading];
};
export default useEditInfoSetting;
