import { useState } from "react";
import { createContext } from "react";
import { deleteAccessToken, getAccessToken } from "../utils/localStorage";
import { giveAccessToken } from "../utils/localStorage";
import authApi from "../api/Auth";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(getAccessToken());
  const fetch = async () => {
    try {
      if (getAccessToken()) {
        const result = await authApi.getMe();
        setAuthUser(result.data);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    fetch();
  }, [token]);

  const login = async (body) => {
    const result = await authApi.login(body);
    const token = result.data.accessToken;
    giveAccessToken(token);
    setToken(token);
    toast.success("login success");
    return result;
  };
  const logout = () => {
    deleteAccessToken();
    setAuthUser(null);
    setToken(null);
    toast.success("logout success");
  };
  return <AuthContext.Provider value={{ authUser, login, logout, token, setAuthUser, fetch }}>{children}</AuthContext.Provider>;
}
