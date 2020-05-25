import React from 'react';
import AvatarM from '../../assets/images/mohan-muruge.jpg'
import '../Header/Header.scss';

function Avatar() {
    return (
        <img src={AvatarM} alt='Avatar' className='avatar__img'></img>
    )
}


export default Avatar;