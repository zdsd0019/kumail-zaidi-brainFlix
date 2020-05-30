import React, { Component } from 'react';
// import blank from './assets/images/blank.jpg';
import axios from 'axios';
// import ConversationList from './components/ConversationList/ConverstionList'

const url ='https://project-2-api.herokuapp.com';
const ApiKey = "?api_key=c033b9a6-1ff6-4ae1-b4a0-7681282c5e6b";

class ConversationListArray extends Component {

	state = {
    	ConversationListArray: [],
	}

	componentDidMount() {
		axios.get(url + '/videos/' + (this.state.VideoId) + ApiKey)
		.then(results => {
			  this.setState({
				ConversationListArray: results.data.comments,
			  })
		})
	}
	render() {
		return (
			<>
			 <ConversationList ConversationList={this.state.ConversationListArray} />	
			</>
		);
	}
}

export default ConversationListArray;
