import React from 'react';
import AvatarM from '../../assets/images/mohan-muruge.jpg'
import '../header/header';

function Avatar() {
    return (
        <img src={AvatarM} alt='Avatar' className='avatar__img'></img>
    )
}


export default Avatar;