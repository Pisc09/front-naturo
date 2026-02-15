// authService.jsx
import apiClient from "./api.jsx";
/**
 * Connexion d'un utilisateur
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} { token, type, role }
 */
export async function login(credentials) {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    const { token, type, role } = response.data;
    if (!token) {
      throw new Error("Token manquant dans la réponse");
    }
    // Stockage du token
    localStorage.setItem("authToken", token);
    // Stockage du rôle
    if (role) {
      localStorage.setItem("userRole", role);
    }
    // ──────────────── STOCKAGE DE L'ID UTILISATEUR ────────────────
    // Cherche id sous toutes les formes possibles dans la réponse
    const userId =
      response.data.id ||
      response.data.userId ||
      response.data.user?.id ||
      response.data.user_id ||
      response.data.user?.userId;
    if (userId) {
      localStorage.setItem("userId", userId.toString());
      console.log("[LOGIN] userId stocké :", userId);
    } else {
      console.warn(
        "[LOGIN] Aucun ID utilisateur dans la réponse de /auth/login",
      );
    }
    // ──────────────── STOCKAGE DIRECT PRÉNOM / NOM (si présents) ────────────────
    const firstname = response.data.firstname || response.data.user?.firstname;
    const lastname = response.data.lastname || response.data.user?.lastname;
    if (firstname || lastname) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          firstname: firstname || "",
          lastname: lastname || "",
        }),
      );
      console.log("[LOGIN] userData stocké (prénom/nom)");
    }

    // ──────────────── ÉVÉNEMENT POUR NOTIFIER LE CONTEXTE ────────────────
    window.dispatchEvent(new Event("auth:login"));

    return { token, type, role };
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    let message = "Identifiants invalides";
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }
    throw new Error(message);
  }
}
/**
 * Déconnexion
 */
export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userRole");
  localStorage.removeItem("userId");
  localStorage.removeItem("userData");
  window.dispatchEvent(new Event("auth:logout"));
}
/**
 * Récupère le token JWT stocké
 * @returns {string|null}
 */
export function getToken() {
  return localStorage.getItem("authToken");
}
/**
 * Vérifie si l'utilisateur est authentifié
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!getToken();
}
/**
 * Récupère le rôle stocké
 * @returns {string|null}
 */
export function getUserRole() {
  return localStorage.getItem("userRole");
}
/**
 * Vérifie un rôle précis
 */
export function hasRole(role) {
  return getUserRole() === role;
}
/**
 * Récupère les données utilisateur stockées (prénom/nom)
 * @returns {Object|null}
 */
export function getStoredUserData() {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
}
