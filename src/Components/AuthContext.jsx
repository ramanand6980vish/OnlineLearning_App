import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [role, setRole] = useState(""); // ✅ add role state

  // 🔑 Load auth state & role from localStorage on app start
  useEffect(() => {
    const savedAuth = localStorage.getItem("IsSuccess");
    const savedRole = localStorage.getItem("role") || ""; // 🔄 keep key consistent

    if (savedAuth === "true") {
      setIsSuccess(true);
    }
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  // 🔑 Save auth state whenever it changes
  useEffect(() => {
    localStorage.setItem("IsSuccess", isSuccess ? "true" : "false");
  }, [isSuccess]);

  // 🔑 Save role whenever it changes
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role); // 🔄 use same key everywhere
    } else {
      localStorage.removeItem("role"); // cleanup if role cleared
    }
  }, [role]);

  return (
    <AuthContext.Provider value={{ isSuccess, setIsSuccess, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
