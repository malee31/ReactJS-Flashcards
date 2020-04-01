import React from 'react';
import '../css/Home.css'
import {Link} from "react-router-dom";

export default() => {
	return(
		<main>
			<header>Home</header>
			<Link to="/create">Make Cards</Link>
			<Link to="/cards">Use Cards</Link>
		</main>
	);
};
