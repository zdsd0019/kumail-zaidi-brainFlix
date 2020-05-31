import React, { Component } from 'react';
import axios from 'axios';


const url ='https://project-2-api.herokuapp.com';
const ApiKey = "?api_key=c033b9a6-1ff6-4ae1-b4a0-7681282c5e6b";

class ConversationListArray extends Component {

	state = {
    	conversationListArray: [],
	}

	componentDidMount() {
		axios.get(url + '/videos/' + (this.state.videoId) + ApiKey)
		.then(results => {
			  this.setState({
				conversationListArray: results.data.comments,
			  })
		})
		.then(results => {
			axios.get(url + '/videos/' + (this.state.videoId) + ApiKey)
			.catch(() => {
				console.error(
				'Something Went Wrong!!!'
				);
			});
		})
	}
	
	render() {
		return (
			<>
			 <ConversationList ConversationList={this.state.conversationListArray} />	
			</>
		);
	}
}

export default ConversationListArray;
