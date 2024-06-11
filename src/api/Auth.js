import axios from "../config/axios";
import { getAccessToken } from "../utils/localStorage";

const authApi = {};

authApi.register = async (body) => {
  console.log("i am body", body);
  const result = await axios.post("/auth/register", body);
  console.log(result);
};
authApi.login = async (body) => {
  console.log("i am body", body);
  const result = await axios.post("/auth/login", body);
  console.log("i am result", result);
  return result;
};
authApi.getMe = async () => await axios.get("/auth/me");

export default authApi;

// import axios from "../config/axios";
// const authApi = {};
// authApi.register = (body) => axios.post("/auth/register", body); //axios({method:'post',url:'auth/register',data:body})
// authApi.login = (body) => axios.post("/auth/login", body);
// authApi.getAuthUser = () => axios.get("/auth/me");

// export default authApi;
