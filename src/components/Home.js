import React from 'react';
import '../css/Home.css'
import {Link} from "react-router-dom";

export default() => {
	return(
		<main>
			<header>Home</header>
			<Link to={process.env.PUBLIC_URL + "/create"}>Make Cards</Link>
			<Link to={process.env.PUBLIC_URL + "/cards"}>Use Cards</Link>
		</main>
	);
};
