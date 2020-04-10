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
			editing: 0,
			flipped: false
		};
		this.saveData = this.saveData.bind(this);
		this.setCurrentPair = this.setCurrentPair.bind(this);
		this.addCurrentPair = this.addCurrentPair.bind(this);
		this.nextCard = this.nextCard.bind(this);
		this.deleteIndex = this.deleteIndex.bind(this);
		this.editIndex = this.editIndex.bind(this);
		this.editCurrent = this.editCurrent.bind(this);
	}

	saveData()
	{
		localStorage.setItem("words", JSON.stringify(this.state.words));
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
		if(this.state.words.filter(word => word.front === this.state.currentPair.front).length) return;
		var newWordSet = [...this.state.words];
		newWordSet.push(this.state.currentPair);
		this.setState({
			words: newWordSet,
			currentPair: {"front": "", "back": ""}
		}, this.saveData);
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

	deleteIndex(index, toEnd)
	{
		var wordCopy = [...this.state.words];
		wordCopy.splice(index, toEnd ? wordCopy.length - index : 1);
		this.setState({
			words: wordCopy
		}, this.saveData);
	}

	editIndex(index)
	{
		if(this.state.editing === index) return;
		this.setState({
			editing: index
		});
	}

	editCurrent(e, isFront)
	{
		e.preventDefault();
		var editedWords = [...this.state.words];
		editedWords[this.state.editing][isFront? "front" : "back"] = e.target.value;
		this.setState({
			words: editedWords
		}, this.saveData);
	}

	render()
	{
		return(
			<Router>
				<Nav/>
				<Switch>
					<Route exact path={["/", "/home", "/ReactJS-Flashcards/", "/ReactJS-Flashcards/home"]}>
						<Home/>
					</Route>
					<Route exact path={["/create", "/ReactJS-Flashcards/create"]}>
						<Creator wordSets={this.state.words} addWord={this.addCurrentPair} pair={this.state.currentPair} change={this.setCurrentPair} editHandler={this.editIndex} editing={this.editCurrent} del={this.deleteIndex}/>
					</Route>
					<Route exact path={["/cards", "/ReactJS-Flashcards/cards"]}>
						<Flashcards card={this.state.words[this.state.currentIndex]} flipped={this.state.flipped} onNext={this.nextCard}/>
					</Route>
				</Switch>
			</Router>
		);
	}
};
