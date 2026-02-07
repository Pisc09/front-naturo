import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout/PageLayout.jsx";
import SidebarLayout from "./components/layout/SidebarLayout/SidebarLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

import Accueil from "./pages/Accueil/Accueil.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Recherche from "./pages/Recherche/Recherche.jsx";
import AnnuairePraticiens from "./pages/AnnuairePraticiens/AnnuairePraticiens.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Profil from "./pages/Profil/Profil.jsx";

function App() {
  return (
    <Routes>
      {/* Pages publiques */}
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Accueil />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recherche" element={<Recherche />} />
        <Route path="annuaire-praticiens" element={<AnnuairePraticiens />} />
      </Route>

      {/* Pages privées */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <SidebarLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profil" element={<Profil />} />
        {/* Ajoute ici les autres pages internes du dashboard */}
      </Route>
    </Routes>
  );
}

export default App;
