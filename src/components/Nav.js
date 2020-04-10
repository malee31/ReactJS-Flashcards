import React from 'react';
import {Link} from 'react-router-dom';
import HomeIcon from '../img/HomeIcon.svg';
import '../css/Nav.css';

export default() => {
	return(
		<nav>
			<Link to={process.env.PUBLIC_URL + "/"}><img src={HomeIcon} alt="Home"></img></Link>
		</nav>
	);
}
