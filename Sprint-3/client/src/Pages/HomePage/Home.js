import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from '../../components/mainVideo/mainVideo'
import ConversationInput from '../../components/conversationInput/conversationInput'
import VideoDescription from '../../components/videoDescription/videoDescription'
import VideoListArray from '../../components/VideoListArray/VideoListArray';
import ConversationList from '../../components/conversationList/converstionList';

const url = process.env.REACT_APP_API_URL;
const ApiKey = "?api_key=c033b9a6-1ff6-4ae1-b4a0-7681282c5e6b";
const videoidurl = id => `${url}/videos/${id}${ApiKey}`


class Home extends Component {

    state = {
		nextVideos: [], /* Next Videos */
		currentVideo: [], /* Displayed Video */
		videoId: '', /* Displayed Video Id's */
		currentInformation: [], /*Video Title, Autor, Date, Description Likes and Views */
    conversationsHistory: [], /* Displays List of comments */
    currentlyPlaying: [] /* Video being played in main video */
	  }
	
	  componentDidMount() {
		axios.get(url + '/videos')
		.then(results => {
		 this.setState({ nextVideos: results.data });
		 this.setState({videoId: results.data[0].id});
		})
		.then(() => {
		  axios.get(videoidurl (this.state.videoId))
		  .then(results => {
			this.setState({ 
			      currentVideo: results.data.image,
            currentInformation: results.data,
            conversationsHistory: results.data.comments,
            currentlyPlaying: results.data.video + ApiKey 
			  })
		  })
    })
    .then(results => {
      axios.get(videoidurl (this.state.videoId))
      .catch(() => {
        console.error(
        'Something Went Wrong!!!'
        );
      });
    })
  }
    

  componentDidUpdate(prevProps) {
    if( this.props.match.params.id !== prevProps.match.params.id  ) {
      axios
      .get(videoidurl (this.props.match.params.id))
        .then(results => {
          this.setState({
            currentVideo: results.data.image,
            currentInformation: results.data,
            conversationsHistory: results.data.comments,
            currentlyPlaying: results.data.video + ApiKey
          })
        })
    }
  }

      render(){
        return(
            <>
                <MainVideo currentVideo = { this.state.currentVideo } currentlyPlaying = { this.state.currentlyPlaying } /> {/* Shows the Main/Current video */}
                <span className='aside'>
                  <span>
                 <VideoDescription currentInformation= { this.state.currentInformation } /> {/* contains Video title,author name, date, description, views, likes  */}
                <ConversationInput /> {/* Displays conversation input box */}

                <ConversationList conversationsHistory={this.state.conversationsHistory} /> {/* displays list of comments */}
                </span>
                <VideoListArray nextVideos={this.state.nextVideos} currentInformation={this.state.currentInformation}/> {/* Displays list of next videos */}
                </span>
            </>
        )
    }
}
    

export default Home;

