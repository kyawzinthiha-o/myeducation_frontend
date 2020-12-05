import axios from "axios";

const helper = async () => {
  const token = localStorage.token;
  axios.interceptors.request.use(
    (config) => {
      
      if (token) {
        config.headers["x-auth-token"] = token;
      }
      config.headers["Content-Type"] = "application/json";
      config.withCredentials = true;
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
};

export default helper;
