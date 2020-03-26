import React from 'react';
import './Flashcards.css';

export default() => {
	return(
		<div id="App">
			<header>
				Flashcards
			</header>
			<div id="card">
				<div id="flipContainer">
					<div id="front">
						<p id="frontText">
							Front
						</p>
					</div>
					<div id="back">
						<p id="backText">
							Back
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
