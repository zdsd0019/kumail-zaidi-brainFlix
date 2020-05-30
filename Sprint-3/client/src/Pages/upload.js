import React from 'react';
import uploadpic from '../assets/images/upload-video-preview.jpg';


function upload() {
 return(
    <section className='upload'>
        <h1 className='upload-title'>Upload Video</h1>
        <span className='desktop-body'>
        <span>
        <h5 className='upload-subtitle'>VIDEO THUMBNAIL</h5>
        <img className='upload-image' src={uploadpic} alt='Thumbnail' />
        </span>
        <span className='desktop-align'>
        <h5 className='upload-subtitle'>TITLE YOUR VIDEO</h5>
        <input type='text' name='search' className='upload-search' placeholder='Add a title to your video'required/> 

        <h5 className='upload-description'>ADD A VIDEO DESCRIPTION</h5>
        <textarea className='upload-box' name="conversation-box" placeholder="Add a description of your video" required/>
        </span>
        </span>
        <span className='tablet-btn'>
        <button className="upload-btn">PUBLISH</button>
        <button className="upload-btn-cancel">CANCEL</button>
        </span>
    </section>
     
 );   
}

export default upload;