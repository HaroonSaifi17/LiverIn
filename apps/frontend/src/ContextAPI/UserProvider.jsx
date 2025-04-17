// src/context/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

// Custom Provider Component
export const UserProvider = ({ children }) => {
  const [user,setUser] = useState(null);
  const [token, setToken] = useState(null);
  useEffect(()=>{
    setToken(localStorage.getItem("token"));
  },[token]);
  

  const login = (userData) => {
    setUser(userData);
  };
  const logout = (navigate) => {
    setUser(null)
    localStorage.removeItem("token");
    navigate("/")
  };

  return (
    <UserContext.Provider value={{ user, login, logout, token }}>
      {children}
    </UserContext.Provider>
  );
};

// Optional: useUser() hook for easier access
export const useUser = () => useContext(UserContext);
