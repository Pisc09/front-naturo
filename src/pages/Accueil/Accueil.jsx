import React from 'react';

function Accueil() {
	return (
		<section className="page page-accueil" style={{padding: '2rem'}}>
			<h1>Bienvenue sur Naturo</h1>
			<p>Découvrez nos ressources et commencez votre parcours bien-être. Cliquez sur « Commencer » pour explorer l'application.</p>
			<button type="button" onClick={() => { /* placeholder action */ }}>
				Commencer
			</button>
		</section>
	);
}

export default Accueil