import React from "react";

function Register() {
  return (
    <section className="page page-register" style={{ padding: "2rem" }}>
      <h1>Inscription</h1>
      <p>
        Créez un compte pour suivre votre progression et sauvegarder vos
        préférences. Cliquez sur « S'inscrire » pour commencer.
      </p>
      <button
        type="button"
        onClick={() => {
          /* placeholder register */
        }}
      >
        S'inscrire
      </button>
    </section>
  );
}

export default Register;
