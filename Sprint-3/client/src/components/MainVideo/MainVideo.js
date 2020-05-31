import React from 'react';
import './MainVideo.scss';

class MainVideo extends React.Component {
	render() {
		return (

			<video src={ this.props.currentlyPlaying } poster={ this.props.currentVideo } className="currently-playing" controls ></video>

		);
	}
}

export default MainVideo;
