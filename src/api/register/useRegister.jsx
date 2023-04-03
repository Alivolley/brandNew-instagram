import { useState } from "react";

const useRegister = () => {
   const [loading, setLoading] = useState(false);

   const registerRequest = () => {
      setLoading(true);
   };
   return [registerRequest, loading];
};

export default useRegister;
