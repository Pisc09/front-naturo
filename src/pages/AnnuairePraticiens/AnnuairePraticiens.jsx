import React from "react";

function AnnuairePraticiens() {
  return (
    <section
      className="page page-annuaire-praticiens"
      style={{ padding: "2rem" }}
    >
      <h1>Annuaire des praticiens</h1>
      <p>
        Parcourez la liste des praticiens disponibles, filtrez par spécialité et
        localisation pour trouver le professionnel qui vous convient.
      </p>
      <button
        type="button"
        onClick={() => {
          /* placeholder browse */
        }}
      >
        Parcourir
      </button>
    </section>
  );
}

export default AnnuairePraticiens;
