import './UploadarAvatar.scss';
import React, { Component } from 'react';
import UploadarAvatar from '../../../assets/images/mohan-muruge.jpg';

class UploaderAvatar extends Component {
    render() {
        return (
            <>
                <section className='uploader_container' >
                    <img className='uploader_avatar' src={ UploadarAvatar } alt='Your Avatar Here' /> 
                </section>
            </>
        )
    };
};


export default UploaderAvatar;