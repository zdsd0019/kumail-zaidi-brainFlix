import './Likes.scss';
import React, { Component } from 'react';
import LikesIcon from '../../../assets/icons/svg/icon-likes.svg';

class Likes extends Component {
    render() {
        return (
            <>
            <section className='likes_container'>
                <img src={LikesIcon} alt='Total Likes' className='likes' />
                <h4 className='likes_fig'>110,985</h4>
            </section>  
            </>
        )
    };
};

export default Likes;
