import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../SearchBar/SearchBar';
import UploadBtn from '../UploadButton/UploadBtn';
import AvatarMohan from '../Avatar/Avatar';
import '../Header/Header.scss';
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
			<Link to={'/upload'} >
				<UploadBtn />
			</Link>
				<AvatarMohan />
			</p>
		</span>
	);
}

export default Header;
