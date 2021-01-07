import React, { Component } from 'react'
import NavLogo from '../../../assets/logo/logo-brainflix.svg';
import './BrainFlixLogo.scss';

class BrainFlixLogo extends Component {
    render() {
        return (
            <>
               <img src= { NavLogo } alt= 'Brain Flix' className='main_logo' />
            </>
        )
    };
};

export default BrainFlixLogo;