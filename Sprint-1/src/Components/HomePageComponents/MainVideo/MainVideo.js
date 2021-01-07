import React, { Component } from 'react';
import './MainVideo.scss';
import ReactPlayer from 'react-player';
import MVideo from '../../../assets/video/brainStation-sample-video.mp4';
import MPoster from '../../../assets/images/video-list-0.jpg';

class MainVideo extends Component {
    render() {
        return (
            <>
                <section className='player_container'>
                    <div className='player_wrapper'>
                        <ReactPlayer 
                        className='react-player' 
                        url={MVideo} 
                        playing={true} 
                        muted={false} 
                        loop={true}
                        controls={true} 
                        style={{padding: 0}}
                        width='100vw'
                        height='57vw'
                        light={MPoster}
                        />
                    </div>

                </section>
            </>
        )
    };
};

export default MainVideo;