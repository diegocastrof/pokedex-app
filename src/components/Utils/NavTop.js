import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pokedexLogo from '../../assets/images/pokedex.png';

const NavTop = () => {
	return (
		<div className="navtop">
			<div className="navtop--container">
				<div className="navtop--logo">
					<Link to="/">
						<Image src={pokedexLogo} width="50px" height="50px" />
						<span className="navtop--logo__title">HoumPokedex!</span>
					</Link>
				</div>
				<p>Atrápalos ya!</p>
			</div>
		</div>
	);
};

export default NavTop;
