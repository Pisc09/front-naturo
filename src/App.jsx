import React from "react";
import { Routes, Route } from "react-router-dom";
import SidebarDashboard from "./components/layout/SidebarDashboard/SidebarDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Remedes from "./pages/Remedes/Remedes.jsx";
import QuestionnaireDeSante from "./pages/QuestionnaireDeSante/QuestionnaireDeSante.jsx";
import Praticiens from "./pages/Praticiens/Praticiens.jsx";
import Tarifs from "./pages/Tarifs/Tarifs.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Recherche from "./pages/Recherche/Recherche.jsx";
import AnnuairePraticiens from "./pages/AnnuairePraticiens/AnnuairePraticiens.jsx";
import Profil from "./pages/Profil/Profil.jsx";
import Favoris from "./pages/Favoris/Favoris.jsx";
import RendezVous from "./pages/RendezVous/RendezVous.jsx";
import ProDeSante from "./pages/ProDeSante/ProDeSante.jsx";
import PageLayout from "./components/layout/PageLayout/PageLayout.jsx";

function App() {
  return (
    <Routes>
      {/* Pages publiques */}
      <Route path="/" strict element={<PageLayout />}>
        <Route index element={<Accueil />} />
        <Route path="remedes" element={<Remedes />} />
        <Route path="questionnaire-sante" element={<QuestionnaireDeSante />} />
        <Route path="praticiens" element={<Praticiens />} />
        <Route path="tarifs" element={<Tarifs />} />
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
            <SidebarDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="profil" element={<Profil />} />
        <Route path="favoris" element={<Favoris />} />
        <Route path="rdv" element={<RendezVous />} />
        <Route path="pro-sante" element={<ProDeSante />} />
        <Route path="recherche" element={<Recherche />} />
        {/* Ajoute ici les autres pages internes du dashboard */}
      </Route>
    </Routes>
  );
}

export default App;
