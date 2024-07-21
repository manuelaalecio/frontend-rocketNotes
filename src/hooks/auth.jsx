import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, user: data.user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
