import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.js';
import Creator from './Creator.js';
import Flashcards from './Flashcards.js';

export default() => {
	//Optional Nav can be added before <Switch>
	return(
		<Router>
			<Switch>
				<Route exact path={["/", "/home"]}>
					<Home/>
					<Link to="/cards">Cards</Link>
				</Route>
				<Route exact path="/create">
					<Creator/>
				</Route>
				<Route exact path="/cards">
					<Flashcards/>
				</Route>
			</Switch>
		</Router>
	);
};
