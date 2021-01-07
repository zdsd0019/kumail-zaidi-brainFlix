import React, { Component } from 'react';
import './HomePage.scss';
import MainVideo from '../../Components/HomePageComponents/MainVideo/MainVideo.js';
import MainHeading from '../../Components/HomePageComponents/MainHeading/MainHeading.js';
import MainAuthor from '../../Components/HomePageComponents/MainAuthor/MainAuthor.js';
import Date from '../../Components/HomePageComponents/Date/Date.js';
import Viewers from '../../Components/HomePageComponents/Viewers/Viewers.js';
import MainStory from '../../Components/HomePageComponents/MainStory/MainStory.js';
import CommentsTally from '../../Components/HomePageComponents/CommentsTally/CommentsTally.js';
import ConversationPosting from '../../Components/HomePageComponents/ConversationPosting/ConversationPosting.js';
import Likes from '../../Components/HomePageComponents/Likes/Likes.js';
import ConversationlistDisplay from '../../Components/HomePageComponents/ConversationListDisplay/ConversationListDisplay.js';
import NextVideoHeading from '../../Components/HomePageComponents/NextVideoHeading/NextVideoHeading.js'
import VideoDisplay from '../../Components/HomePageComponents/VideoArray/VideoArray.js';

class HomePage extends Component {
    render() {
        return (
            <>
             <MainVideo />
                <section className='primary_container'>
                    <MainHeading />
                    <span className='secondary_container'>
                        <MainAuthor />
                        <Date />
                    </span>
                    <span className='tertiary_container'>
                        <Viewers />
                        <Likes />
                    </span>
                </section>
            <MainStory />
            <CommentsTally />
            <ConversationPosting />
            <ConversationlistDisplay />
            <NextVideoHeading />
            <VideoDisplay />
            </>
        )
    };
};

export default HomePage;
