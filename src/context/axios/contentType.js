import axios from "axios";

const contentType = () => {
 
  axios.interceptors.request.use(
    (config) => {

      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

export default contentType;
