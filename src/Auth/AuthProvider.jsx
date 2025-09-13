import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [user, setUser] = useState(null);
  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser({ username });
      localStorage.setItem("user", JSON.stringify({ username }));
    } else {
      alert("pls login this one!");
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
