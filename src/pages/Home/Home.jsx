import React, { useEffect, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";

const Home = () => {
   const [dklflsfk, setDklflsfk] = useState();
   const [loading, setloading] = useState(true);

   useEffect(() => {
      axiosInstance
         .get("saved_posts/")
         .then((res) => {
            setDklflsfk(res.data.total_pages);
         })
         .catch((err) => console.log(err))
         .finally(() => setloading(false));
   }, []);

   return <div>{!loading ? dklflsfk : <p>loading ...</p>}</div>;
};

export default Home;
