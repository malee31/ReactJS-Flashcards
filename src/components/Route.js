import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from './Nav.js';
import Home from './Home.js';
import Creator from './Creator.js';
import Flashcards from './Flashcards.js';

export default class WordBank extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			words: JSON.parse(localStorage.getItem("words")) || [], //type Array.{front: string, back: string}
			currentPair: {"front": "", "back": ""},
			currentIndex: 0,
			flipped: false
		};
		this.setCurrentPair = this.setCurrentPair.bind(this);
		this.addCurrentPair = this.addCurrentPair.bind(this);
		this.nextCard = this.nextCard.bind(this);
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
		if(this.state.currentPair.front === "" && this.state.currentPair.back === "") return;
		var newWordSet = this.state.words.slice();
		newWordSet.push(this.state.currentPair);
		this.setState({
			words: newWordSet,
			currentPair: {"front": "", "back": ""}
		}, () => {
			localStorage.setItem("words", JSON.stringify(this.state.words));
		});
	}

	nextCard()
	{
		if(this.state.flipped)
		{
			this.setState({
				flipped: false,
				currentIndex: (this.state.currentIndex + 1) % this.state.words.length 
			});
		}
		else
		{
			this.setState({
				flipped: true
			});
		}
	}

	render()
	{
		return(
			<Router>
				<Nav/>
				<Switch>
					<Route exact path={["/", "/home"]}>
						<Home/>
					</Route>
					<Route exact path="/create">
						<Creator wordSets={this.state.words} addWord={this.addCurrentPair} pair={this.state.currentPair} change={this.setCurrentPair}/>
					</Route>
					<Route exact path="/cards">
						<Flashcards card={this.state.words[this.state.currentIndex]} flipped={this.state.flipped} onNext={this.nextCard}/>
					</Route>
				</Switch>
			</Router>
		);
	}
};
