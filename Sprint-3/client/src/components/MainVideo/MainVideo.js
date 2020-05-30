import React from 'react';
import './MainVideo.scss';

class MainVideo extends React.Component {
	render() {
		return (

			<video src={ this.props.CurrentlyPlaying } poster={ this.props.CurrentVideo } className="currently-playing" controls ></video>

		);
	}
}

export default MainVideo;
