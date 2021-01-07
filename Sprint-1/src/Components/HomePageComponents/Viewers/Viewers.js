import './Viewers.scss';
import React, { Component } from 'react';
import ViewsIcon from '../../../assets/icons/svg/icon-views.svg';

class viewers extends Component {
    render() {
        return (
            <>
                <section className='watch_container'>
                    <img src={ViewsIcon} alt='Total Views' className='watch' />
                    <h4 className='watch_fig' >1,001,023</h4>
                </section>  
            </>
        )
    };
};

export default viewers;
