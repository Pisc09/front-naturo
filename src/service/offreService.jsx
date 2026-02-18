// offreService.js
import apiClient from "./api.jsx";

const BASE = "/offres";

export async function getAllOffres() {
  try {
    const { data } = await apiClient.get(BASE);
    return data;
  } catch (error) {
    console.error("Échec getAllOffres", error);
    throw error;
  }
}

export async function getOffresPubliques() {
  try {
    const { data } = await apiClient.get(`${BASE}/public`);
    return data;
  } catch (error) {
    console.error("Échec getOffresPubliques", error);
    throw error;
  }
}

export async function getOffresByPraticien(praticienId) {
  if (!praticienId || isNaN(praticienId))
    throw new Error("ID praticien invalide");
  try {
    const { data } = await apiClient.get(`${BASE}/praticien/${praticienId}`);
    return data;
  } catch (error) {
    console.error(`Échec getOffresByPraticien(${praticienId})`, error);
    throw error;
  }
}

export async function createOffre(offreData) {
  try {
    const { data } = await apiClient.post(BASE, offreData);
    return data;
  } catch (error) {
    const message = error.response?.data?.message || "Échec création offre";
    throw new Error(message);
  }
}

export async function updateOffre(id, offreData) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    const { data } = await apiClient.put(`${BASE}/${id}`, offreData);
    return data;
  } catch (error) {
    console.error(`Échec updateOffre(${id})`, error);
    throw error;
  }
}

export async function deleteOffre(id) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    await apiClient.delete(`${BASE}/${id}`);
  } catch (error) {
    console.error(`Échec deleteOffre(${id})`, error);
    throw error;
  }
}

export async function toggleOffreVisibilite(id) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    await apiClient.patch(`${BASE}/${id}/visibilite`);
  } catch (error) {
    console.error(`Échec toggleOffreVisibilite(${id})`, error);
    throw error;
  }
}
