// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { getUserById } from "../service/userService";
// eslint-disable-next-line no-unused-vars
import { getToken, isAuthenticated } from "../service/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated()) {
        // 1. On regarde d'abord si on a déjà stocké prénom/nom directement après login
        const storedUserData = JSON.parse(
          localStorage.getItem("userData") || "{}",
        );

        if (storedUserData.firstname || storedUserData.lastname) {
          setUser({
            firstname: storedUserData.firstname,
            lastname: storedUserData.lastname,
            // on peut ajouter d'autres champs si besoin
          });
        } else {
          // 2. Sinon on utilise userId pour fetch le profil complet
          const userId = localStorage.getItem("userId");
          if (userId) {
            try {
              const userData = await getUserById(userId);
              setUser(userData);
            } catch (err) {
              console.error("Échec récupération profil via getUserById", err);
            }
          }
        }
      }
      setLoading(false);
    };

    initAuth();

    // Nettoyage lors du logout global
    const handleLogout = () => setUser(null);
    window.addEventListener("auth:logout", handleLogout);

    return () => {
      window.removeEventListener("auth:logout", handleLogout);
    };
  }, []);

  const value = { user, loading, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
