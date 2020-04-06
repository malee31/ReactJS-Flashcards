import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '../img/HomeIcon.svg';
import '../css/Nav.css';

export default() => {
	return(
		<nav>
			<Link to="/"><img src={HomeIcon} alt="Home"></img></Link>
		</nav>
	);
}
