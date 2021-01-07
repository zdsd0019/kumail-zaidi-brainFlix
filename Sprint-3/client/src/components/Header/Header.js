import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../SearchBar/SearchBar';
import UploadBtn from '../../components/UploadButton/UploadBtn';
import Avatar from '../Avatar/Avatar';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header__section mobile-padding">
			<p className="logo">
				<Link to="/">
					<Logo />
				</Link>
			</p>
			<Search />
			<p className="nav">
				<Link to={'/upload'} className="nav-decoration">
					<UploadBtn />
				</Link>
				<Avatar />
			</p>
		</header>
	);
}

export default Header;
