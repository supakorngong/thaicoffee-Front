import axios from "axios";
import { getAccessToken } from "../utils/localStorage";
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config; //axios(config) ไม่ return = axios(undefined)
});

// ทุก response ที่เข้ามาให้ clear token
axios.interceptors.response.use(
  (value) => Promise.resolve(value),

  (err) => {
    if (err.response.status === 401) {
      window.location.assign("/login");
      return;
    }

    return Promise.reject(err);
  }
);

export default axios;
