import { createContext, useContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ Name: "Manuela", email: "manuela@email.com" }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
