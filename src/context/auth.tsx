import React, { createContext, ReactNode, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const login = false;
  const logout = !login;

  return (
    <AuthContext.Provider value={{ isAuthenticated: login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtextRoute = ({ children }: { children: ReactNode }) => {
  const login = false;
  const logout = !login;
  //   if (login) return <LoginPage />;
  //   if (logout) return <LogoutPage />;
};
