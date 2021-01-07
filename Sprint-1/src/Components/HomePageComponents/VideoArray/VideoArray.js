import './VideoArray.scss';
import React from 'react';
import ZeroImage from '../../../assets/images/video-list-0.jpg';
import FirstImage from '../../../assets/images/video-list-1.jpg';
import SecondImage from '../../../assets/images/video-list-2.jpg';
import ThirdImage from '../../../assets/images/video-list-3.jpg';
import FourthImage from '../../../assets/images/video-list-4.jpg';
import FifthImage from '../../../assets/images/video-list-5.jpg';
import SixthImage from '../../../assets/images/video-list-6.jpg';
import SeventhImage from '../../../assets/images/video-list-7.jpg';
import EighthImage from '../../../assets/images/video-list-8.jpg';
import VideoDisplay from '../VideoDisplay/VideoDisplay.js';
import { v4 as uuidv4 } from 'uuid';



const VideoList = [
    {
        id: uuidv4(),
        pic: ZeroImage,
        title: 'BMX Rampage: 2018 Highlights',
        author: 'Red Cow',
    },
    {
        id: uuidv4(),
        pic: FirstImage,
        title: 'Become A Travel Pro In One Easy Lesson...',
        author: 'Scotty Cranmer',
    },
    {
        id: uuidv4(),
        pic: SecondImage,
        title: 'Les Houches The Hidden Gem Of The...',
        author: 'Scotty Cranmer',
    },
    {
        id: uuidv4(),
        pic: ThirdImage,
        title: 'Travel Health Useful Medical Information...',
        author: 'Scotty Cranmer',
    },
    {
        id: uuidv4(),
        pic: FourthImage,
        title: 'Cheap Airline Tickets Great Ways To Save',
        author: 'Emily Harper',
    },
    {
        id: uuidv4(),
        pic: FifthImage,
        title: 'Take A Romantic Break In A Boutique Hotel',
        author: 'Ethan Owen',
    },
    {
        id: uuidv4(),
        pic: SixthImage,
        title: 'Choose The Perfect Accommodations',
        author: 'Lydia Perez',
    },
    {
        id: uuidv4(),
        pic: SeventhImage,
        title: 'Cruising Destination Ideas',
        author: 'Timothy Austin',
    },
    {
        id: uuidv4(),
        pic: EighthImage,
        title: 'Train Travel On Track For Safety',
        author: 'Scotty Cranmer',
    },
];

let VideoArray = (props) => {
    return(
        <section>
        {
            VideoList.map(Video => 
                <VideoDisplay 
                    key={Video.id} 
                    pic={Video.pic} 
                    title={Video.title} 
                    author={Video.author} 
                />
            )
        }

        </section>
    )
}

export default VideoArray;