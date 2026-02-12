import React from "react";

function Recherche() {
  return (
    <section className="page page-recherche" style={{ padding: "2rem" }}>
      <h1 className="font-bold">Recherche</h1>
      <p>
        Recherchez des articles, des plantes et des conseils adaptés à vos
        besoins. Utilisez la barre de recherche pour commencer.
      </p>
      <button
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
