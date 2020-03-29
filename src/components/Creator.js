import React from 'react';

export default(props) => {
	return(
		<>
			<p>Create your Flashcard Set</p>
			<form onSubmit={props.addWord}>
				{props.wordSets.map(set => {
					console.log(set);
					return(
						<div className="set" key={set.front + set.back}>
							<input type="text" value={set.front} readOnly></input>
							<input type="text" value={set.back} readOnly></input>
						</div>
					);
				})}
				<div id="newCard">
					<input type="text" placeholder="New Word" value={props.pair["front"]} onChange={e => {props.change("front", e);}}></input>
					<input type="text" placeholder="New Definition" value={props.pair["back"]} onChange={e => {props.change("back", e);}}></input>
				</div>
				<input type="submit" value="Add"></input>
			</form>
		</>
	);
};
