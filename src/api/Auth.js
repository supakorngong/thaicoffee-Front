import axios from "../config/axios";

const authApi = {};

authApi.register = async (body) => {
  await axios.post("/auth/register", body);
};
authApi.login = async (body) => {
  const result = await axios.post("/auth/login", body);
  return result;
};
authApi.updateAddress = async (body) => {
  const result = await axios.patch("/auth/edit", body);
  return result;
};
authApi.getMe = async () => await axios.get("/auth/me");

export default authApi;
