// import { useEffect, useState } from "react";

// const useRetry = (asyncFn, setLatestProducts, maxRetries = 3, delay = 2000) => {
//   //   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);
//   const [retryCount, setRetryCount] = useState(0);

//   //   useEffect(() => {
//   const fetchDataWithRetry = async () => {
//     let response = await asyncFn();
//     if (response.success) {
//       setError(null);
//       return;
//     } else {
//       setError("Failed to perform operation after multiple attempts.");
//     }
//   };

// //   while (error && maxRetries <= 3) {
// //     fetchDataWithRetry();
// //     maxRetries--;
// //   }
//   //   }, [retryCount]);

//   useEffect(() => {
//     if (error && maxRetries <= 3) {
//       fetchDataWithRetry();
//       maxRetries--;
//     }
//   },[maxRetries]);
//   return { error };
// };

// export default useRetry;



import { useEffect, useRef } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { toast } from 'react-toastify';

// Configure axios to use axios-retry
axiosRetry(axios, {
  retries: 3, // Number of retry attempts
  retryDelay: (retryCount) => {
    // Notify the user about retry attempts
    toast.info(`Retrying request... Attempt ${retryCount }`, { autoClose: 1000 });
    return retryCount * 1000; // Exponential back-off delay
  },
  retryCondition: (error) => {
    // Retry on network errors or 5xx responses
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response.status === 500;
  }
});

const useAxiosRetry = () => {
  const axiosInstance = useRef(axios);

  // useEffect(() => {
  //   // Optional: You can add additional axios configuration here if needed
  // }, []);

  return axiosInstance.current;
};

export default useAxiosRetry;
