import './VideoDisplay.scss';
import React from 'react';

let VideoDisplay = (props) => {
    return (
        <section key={props.id} className='video_container' >
            <div>
                <img src={props.pic} alt='preview' className='video_img' />
            </div>
            <div>
                <h2 className='video_title' > {props.title} </h2>
                <h4 className='video_author' > {props.author} </h4>
            </div>
            
        </section>
    )
}

export default VideoDisplay;