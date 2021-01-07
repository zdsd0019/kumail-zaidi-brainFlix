import React, { Component } from 'react';
import './NavBar.scss';
import MainLogo from '../BrainFlixLogo/BrainFlixLogo.js';
import SearchField from '../SearchField/SearchField.js';
import UploadButton from '../UploadButton/UploadButton.js';
import UploadarAvatar from '../UploaderAvatar/UploaderAvatar.js';

class NavBar extends Component {
    render() {
        return (
            <>
            <section className='container'>
                <MainLogo />
                <SearchField />
            </section>
            <section className='combine' >
                <UploadButton />
                <UploadarAvatar />
            </section>
            </>
        )
    }
}

export default NavBar;
