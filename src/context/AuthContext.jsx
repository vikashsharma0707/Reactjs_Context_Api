import { createContext, useState } from "react";

// 1. Create context
export const AuthContext = createContext();

// 2. Create provider
 const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true); // Simulate login
  };

  const logout = () => {
    setIsAuthenticated(false); // Simulate logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
