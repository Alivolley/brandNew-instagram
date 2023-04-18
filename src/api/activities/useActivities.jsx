import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useActivities = () => {
   const [loading, setLoading] = useState(true);
   const [allActivities, setAllActivities] = useState([]);

   const getActivitiesRequest = () => {
      setLoading(true);

      axiosInstance
         .get(`accounts/activities/`)
         .then((res) => {
            console.log(res);
            // if (res.status === 200) {
            //    setAllActivities(res.data);
            // }
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

   return [getActivitiesRequest, loading, allActivities];
};
export default useActivities;
