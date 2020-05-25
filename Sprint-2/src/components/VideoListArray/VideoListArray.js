import React from 'react';
import Video from '../Videolist/Video'
import './VideListArray.scss'
import { Link } from 'react-router-dom';


class VideoListArray extends React.Component {
    render() {
     let videoList = this.props.NextVideos.filter((video) => {
       return video.id !== this.props.CurrentInformation.id
     }).map((video, i) => {
        // console.log('videoID', video.id);
       return <Link to={'/videos/' + video.id} key={video.id} >
       <Video 
    //    id={video.id}
       title={video.title} 
       channel={video.channel} 
       image={video.image} 
       key={video.id} />
         </Link>
     })
       return (
         <div className="next-video">
             <h4 className='video-heading'>NEXT VIDEO</h4>
           {videoList}
         </div>
       )
     }
   }
   
   export default VideoListArray;