import React from "react";
import { useRouter } from "../hooks/useRouter";
import authService from "../services/auth";

interface AuthProviderProps {
  children?: React.ReactNode;
}

interface AuthContextType {
  login(username: string, password: string): any;
  logout(): void;
  isAuthenticated(): boolean;
}

const INITIAL_VALUE: AuthContextType = {
  login: () => {},
  logout: () => {},
  isAuthenticated: () => false,
};

export const AuthContext = React.createContext<AuthContextType>(INITIAL_VALUE);

function AuthProvider({ ...props }: AuthProviderProps) {
  const { children } = props;
  const router = useRouter();

  const logout = () => {
    authService.logout();
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ ...authService, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
