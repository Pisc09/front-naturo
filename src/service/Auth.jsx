const API_URL = "http://localhost:8080/api";

export async function login(credentials) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Identifiants invalides");
  }

  return response.json(); // { token, user }
}

export function logout() {
  localStorage.removeItem("authToken");
}

export function getToken() {
  return localStorage.getItem("authToken");
}

export function isAuthenticated() {
  return !!getToken();
}
