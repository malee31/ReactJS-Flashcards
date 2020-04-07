import React from 'react';
import '../css/Creator.css';

export default(props) => {
	return(
		<>
			<p>Create your Flashcard Set</p>
			<form onSubmit={props.addWord}>
				<div id="wordsets">
					{props.wordSets.map((set, index) => {
						return(
							<div className="set" key={"wordsets[" + index + "]"} onClick={() => props.editHandler(index)}>
								<input className="word" type="text" value={set.front} onChange={e => props.editing(e, true)}></input>
								<input className="define" type="text" value={set.back} onChange={e => props.editing(e, false)}></input>
							</div>
						);
					})}
				</div>
				<div id="newCard">
					<input className="word" type="text" placeholder="New Word" value={props.pair["front"]} onChange={e => {props.change("front", e);}}></input>
					<input className="define" type="text" placeholder="New Definition" value={props.pair["back"]} onChange={e => {props.change("back", e);}}></input>
				</div>
				<input type="submit" value="Add Card"></input>
			</form>
		</>
	);
};
