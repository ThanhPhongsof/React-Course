import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Phong",
    email: "phong.tranthanh@2359media.com",
    avatar:
      "https://images.unsplash.com/photo-1649589069447-77c886fc53b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context == "undefined")
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
