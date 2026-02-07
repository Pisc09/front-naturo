import React from "react";

function Recherche() {
  return (
    <section className="page page-recherche" style={{ padding: "2rem" }}>
      <h1>Recherche</h1>
      <p>
        Recherchez des articles, des plantes et des conseils adaptés à vos
        besoins. Utilisez la barre de recherche pour commencer.
      </p>
      <button
        type="button"
        onClick={() => {
          /* placeholder search */
        }}
      >
        Rechercher
      </button>
    </section>
  );
}

export default Recherche;
