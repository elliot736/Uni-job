// import { useEffect, useState } from "react";
// const axios = require("axios");

// // import jobs from "../apis/jobs";

// const useJobs = (defaultSearchTerm) => {
//   const [jobs, setJobs] = useState([]);
//   useEffect(() => {
//     search(defaultSearchTerm);
//   }, [defaultSearchTerm]);
//   const search = async (q, loc) => {
//     const response = await axios.get("/api", {
//       params: {
//         q,
//         loc,
//       },
//     });
//     setJobs(response);
//   };
//   return [jobs, search];
// };

// export default useJobs;
