import React from 'react';
import { Image } from 'react-bootstrap';
import githubLogo from '../../assets/images/github-logo.png';
import mailLogo from '../../assets/images/mail.png';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer--social-media">
				<a href="https://github.com/diegocastrof/">
					<Image src={githubLogo} width="50px" height="50px" />
				</a>
				<a href="mailto:dieegocastrof@gmail.com">
					<Image src={mailLogo} width="37px" height="37px" />
				</a>
			</div>
			<div className="footer--copyright">
				<p className="text-center">Desarrollado por Diego Castro</p>
				<p className="text-center">En marco de proyecto prueba para Houm</p>
			</div>
		</div>
	);
};

export default Footer;
