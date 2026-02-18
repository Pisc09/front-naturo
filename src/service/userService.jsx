// userService.js
import apiClient from "./api.jsx";

const BASE = "/users";

/**
 * Récupère tous les utilisateurs (admin seulement probablement)
 */
export async function getAllUsers() {
  try {
    const { data } = await apiClient.get(BASE);
    return data;
  } catch (error) {
    console.error("Échec récupération utilisateurs", error);
    throw error; // on laisse l'appelant gérer l'affichage
  }
}

export async function getUserById(id) {
  if (!id || isNaN(id)) throw new Error("ID utilisateur invalide");
  try {
    const { data } = await apiClient.get(`${BASE}/${id}`);
    return data;
  } catch (error) {
    console.error(`Échec getUserById(${id})`, error);
    throw error;
  }
}

export async function registerUser(userData) {
  try {
    const { data } = await apiClient.post(`${BASE}/register`, userData);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Échec de l'inscription";
    throw new Error(message);
  }
}

export async function updateUser(id, userData) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    const { data } = await apiClient.put(`${BASE}/${id}`, userData);
    return data;
  } catch (error) {
    console.error(`Échec updateUser(${id})`, error);
    throw error;
  }
}

export async function deleteUser(id) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    await apiClient.delete(`${BASE}/${id}`);
  } catch (error) {
    console.error(`Échec deleteUser(${id})`, error);
    throw error;
  }
}

export async function toggleUserEnable(id) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    await apiClient.patch(`${BASE}/${id}/toggle-enable`);
  } catch (error) {
    console.error(`Échec toggleUserEnable(${id})`, error);
    throw error;
  }
}
