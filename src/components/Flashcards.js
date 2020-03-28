import React from 'react';
import '../css/Flashcards.css';

export default({front, back}) => {
	return(
		<div id="Flashcards">
			<header>
				Flashcards
			</header>
			<div id="card">
				<div id="flipContainer">
					<div id="front">
						<p id="frontText">
							{front ? front : "Add some words"}
						</p>
					</div>
					<div id="back">
						<p id="backText">
							{back ? back : "Add some definitions"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
