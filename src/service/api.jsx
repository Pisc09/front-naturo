// api.jsx
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // ← très utile en dev pour éviter les hangs infinis
});

// Intercepteur requête : ajout du token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Intercepteur réponse : gestion 401 + logging amélioré
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // Token invalide ou expiré → déconnexion propre
        localStorage.removeItem("authToken");
        // Option : déclencher un événement pour que l'app réagisse
        window.dispatchEvent(new Event("auth:unauthorized"));
        // Redirection (attention : window.location peut casser le SPA si mal géré)
        window.location.href = "/login?session_expired=true";
      }

      // Option : logger les erreurs 5xx vers un service (Sentry, LogRocket...)
      if (status >= 500) {
        console.error(`Erreur serveur ${status}:`, error.response.data);
      }

      return Promise.reject(error);
    }

    // Erreurs réseau sans réponse (timeout, CORS, etc.)
    if (error.request) {
      console.error("Erreur réseau / timeout:", error.message);
      return Promise.reject(new Error("Impossible de contacter le serveur"));
    }

    return Promise.reject(error);
  },
);

export default apiClient;
