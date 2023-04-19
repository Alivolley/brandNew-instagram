import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useSuggestions = () => {
   const [suggestionsloading, setSuggestionsLoading] = useState(true);
   const [allSuggestionsPosts, setAllSuggestionsPosts] = useState([]);

   const getSuggestionsRequest = () => {
      setSuggestionsLoading(true);
      setAllSuggestionsPosts([]);

      axiosInstance
         .get(`accounts/suggestion/`)
         .then((res) => {
            if (res.status === 200) {
               setAllSuggestionsPosts(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("Somthing went wrong", {
               autoClose: 5000,
               theme: "colored",
            });
         })
         .finally(() => setSuggestionsLoading(false));
   };

   return [getSuggestionsRequest, suggestionsloading, allSuggestionsPosts];
};
export default useSuggestions;
