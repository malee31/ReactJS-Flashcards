import React from 'react';
import '../css/Flashcards.css';

export default({card, flipped, onNext}) => {
	return(
		<div id="Flashcards">
			<header>
				Flashcards
			</header>
			<div id="card" className={flipped ? "flipped" : null} onClick={onNext}>
				<div id="flipContainer">
					<div id="front">
						<p id="frontText">
							{card ? card.front ? card.front : "No Word" : "Add some words"}
						</p>
					</div>
					<div id="back">
						<p id="backText">
							{card ? card.back ? flipped ? card.back : "" : "No Definition" : "Add some definitions"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
