import React, { Component } from 'react';
import axios from 'axios';
import MainVideo from '../components/MainVideo/MainVideo'
import ConversationInput from '../components/ConversationInput/ConversationInput'
import VideoDescription from '../components/VideoDescription/VideoDescription'
import VideoListArray from '../components/VideoListArray/VideoListArray';
import ConversationList from '../components/ConversationList/ConverstionList';

const url ='http://localhost:8080';
const ApiKey = "?api_key=c033b9a6-1ff6-4ae1-b4a0-7681282c5e6b";
const videoidurl = id => `http://localhost:8080/videos/${id}${ApiKey}`


class Home extends Component {

    state = {
		NextVideos: [], /* Next Videos */
		CurrentVideo: [], /* Displayed Video */
		VideoId: '', /* Displayed Video Id's */
		CurrentInformation: [], /*Video Title, Autor, Date, Description Likes and Views */
    ConversationsHistory: [], /* Displays List of comments */
    CurrentlyPlaying: [] /* Video being played in main video */
	  }
	
	  componentDidMount() {
		axios.get(url + '/videos')
		.then(results => {
		 console.log(results);
		 this.setState({ NextVideos: results.data });
		 this.setState({VideoId: results.data[0].id});
		 console.log(results.data[0].id);
		})
		.then(() => {
		  axios.get(videoidurl (this.state.VideoId))
		  .then(results => {
			this.setState({ 
			      CurrentVideo: results.data.image,
            CurrentInformation: results.data,
            ConversationsHistory: results.data.comments,
            CurrentlyPlaying: results.data.video + ApiKey 
			  })
		  })
    })
  }

  componentDidUpdate(prevProps) {
    if( this.props.match.params.id !== prevProps.match.params.id  ) {
      axios
      .get(videoidurl (this.props.match.params.id))
        .then(results => {
          this.setState({
            CurrentVideo: results.data.image,
            CurrentInformation: results.data,
            ConversationsHistory: results.data.comments,
            CurrentlyPlaying: results.data.video
          })
        })
    }
  }

      render(){
        return(
            <>
                <MainVideo CurrentVideo = { this.state.CurrentVideo } CurrentlyPlaying = { this.state.CurrentlyPlaying } /> {/* Shows the Main/Current video */}
                <span className='aside'>
                  <span>
                 <VideoDescription CurrentInformation= { this.state.CurrentInformation } /> {/* contains Video title,author name, date, description, views, likes  */}
                <ConversationInput /> {/* Displays conversation input box */}

                <ConversationList ConversationsHistory={this.state.ConversationsHistory} /> {/* displays list of comments */}
                </span>
                <VideoListArray NextVideos={this.state.NextVideos} CurrentInformation={this.state.CurrentInformation}/> {/* Displays list of next videos */}
                </span>
            </>
        )
    }
}
    

export default Home;

