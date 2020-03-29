import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.js';
import Creator from './Creator.js';
import Flashcards from './Flashcards.js';

export default class WordBank extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			words: [], //type Array.{front: string, back: string}
			currentPair: {"front": "", "back": ""}
		};
		this.setCurrentPair = this.setCurrentPair.bind(this);
		this.addCurrentPair = this.addCurrentPair.bind(this);
	}

	setCurrentPair(index, e)
	{
		e.preventDefault();
		var newPair = Object.assign({}, this.state.currentPair);
		newPair[index] = e.target.value;
		this.setState({
			currentPair: newPair
		});
	}

	addCurrentPair(e)
	{
		e.preventDefault();
		if(this.state.currentPair.front == "" && this.state.currentPair.back == "") return;
		var newWordSet = this.state.words.slice();
		newWordSet.push(this.state.currentPair);
		this.setState({
			words: newWordSet,
			currentPair: {"front": "", "back": ""}
		});
	}

	render()
	{
		return(
			<Router>
				<Switch>
					<Route exact path={["/", "/home"]}>
						<Home/>
						<Link to="/cards">Cards</Link>
					</Route>
					<Route exact path="/create">
						<Creator wordSets={this.state.words} addWord={this.addCurrentPair} pair={this.state.currentPair} change={this.setCurrentPair}/>
					</Route>
					<Route exact path="/cards">
						<Flashcards/>
					</Route>
				</Switch>
			</Router>
		);
	}
};
