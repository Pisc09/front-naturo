// rdvService.js
import apiClient from "./api.jsx";

const BASE = "/rdv";

export async function getAllRdv() {
  try {
    const { data } = await apiClient.get(BASE);
    return data;
  } catch (error) {
    console.error("Échec getAllRdv", error);
    throw error;
  }
}

export async function getRdvByPraticien(praticienId) {
  if (!praticienId || isNaN(praticienId)) throw new Error("ID invalide");
  try {
    const { data } = await apiClient.get(`${BASE}/praticien/${praticienId}`);
    return data;
  } catch (error) {
    console.error(`Échec getRdvByPraticien(${praticienId})`, error);
    throw error;
  }
}

export async function getRdvByMembre(membreId) {
  if (!membreId || isNaN(membreId)) throw new Error("ID invalide");
  try {
    const { data } = await apiClient.get(`${BASE}/membre/${membreId}`);
    return data;
  } catch (error) {
    console.error(`Échec getRdvByMembre(${membreId})`, error);
    throw error;
  }
}

export async function createRdv(rdvData) {
  try {
    const { data } = await apiClient.post(BASE, rdvData);
    return data;
  } catch (error) {
    const message = error.response?.data?.message || "Échec création RDV";
    throw new Error(message);
  }
}

export async function updateRdv(id, rdvData) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    const { data } = await apiClient.put(`${BASE}/${id}`, rdvData);
    return data;
  } catch (error) {
    console.error(`Échec updateRdv(${id})`, error);
    throw error;
  }
}

export async function deleteRdv(id) {
  if (!id || isNaN(id)) throw new Error("ID invalide");
  try {
    await apiClient.delete(`${BASE}/${id}`);
  } catch (error) {
    console.error(`Échec deleteRdv(${id})`, error);
    throw error;
  }
}
