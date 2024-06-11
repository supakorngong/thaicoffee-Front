import { useState } from "react";
import { createContext } from "react";
import { deleteAccessToken, getAccessToken } from "../utils/localStorage";
import { giveAccessToken } from "../utils/localStorage";
import authApi from "../api/Auth";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  //   const { children } = props;
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(getAccessToken());
  useEffect(() => {
    const fetch = async () => {
      try {
        if (getAccessToken()) {
          const result = await authApi.getMe();
          setAuthUser(result.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetch();
  }, [token]);

  useEffect(() => {
    console.log("this is AuthUser", authUser);
  }, [authUser]);

  const login = async (body) => {
    const result = await authApi.login(body);
    const token = result.data.accessToken;
    giveAccessToken(token);
    setToken(token);
    return result;
  };
  const logout = () => {
    deleteAccessToken();
    setAuthUser(null);
    setToken(null);
  };
  return <AuthContext.Provider value={{ authUser, login, logout }}>{children}</AuthContext.Provider>;
}
