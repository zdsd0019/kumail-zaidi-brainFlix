import React from 'react';
import Logo from '../logo/logo';
import Search from '../searchBar/searchBar';
import UploadBtn from '../uploadButton/uploadBtn';
import Avatar from '../avatar/avatar';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<span className="header__section mobile-padding">
			<p className="logo">
				<Link to={'/'} >
				<Logo />
				</Link>
			</p>
			<Search />
			<p className='nav'>
			<Link to={'/upload'} className="nav-decoration" > 
				<UploadBtn />
			</Link>
				<Avatar />
			</p>
		</span>
	);
}

export default Header;
