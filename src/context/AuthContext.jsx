// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { getUserById } from "../service/userService";
import { isAuthenticated } from "../service/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      if (!isAuthenticated()) {
        if (isMounted) setLoading(false);
        return;
      }

      const storedUserData = JSON.parse(
        localStorage.getItem("userData") || "{}",
      );
      if (storedUserData.firstname || storedUserData.lastname) {
        if (isMounted) {
          setUser({
            firstname: storedUserData.firstname,
            lastname: storedUserData.lastname,
          });
        }
      } else {
        const userId = localStorage.getItem("userId");
        if (userId) {
          try {
            const userData = await getUserById(userId);
            if (isMounted) setUser(userData);
          } catch (err) {
            console.error("Échec récupération profil via getUserById", err);
          }
        }
      }
      if (isMounted) setLoading(false);
    };

    loadUser();

    // Rechargement après login
    const handleLoginSuccess = () => {
      console.log("[AuthContext] Événement login-success → re-fetch");
      loadUser();
    };
    window.addEventListener("auth:login-success", handleLoginSuccess);

    // Déconnexion
    const handleLogout = () => {
      if (isMounted) setUser(null);
    };
    window.addEventListener("auth:logout", handleLogout);

    return () => {
      isMounted = false;
      window.removeEventListener("auth:login-success", handleLoginSuccess);
      window.removeEventListener("auth:logout", handleLogout);
    };
  }, []);

  const value = { user, loading, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
