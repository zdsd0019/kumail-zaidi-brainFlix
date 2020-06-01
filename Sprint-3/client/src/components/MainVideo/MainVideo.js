import React from 'react';
import './MainVideo.scss';

class MainVideo extends React.Component {
	render() {
		return (
			<span className="video-background">
				<video
					src={this.props.currentlyPlaying}
					poster={this.props.currentVideo}
					className="currently-playing "
					controls
				/>
			</span>
		);
	}
}

export default MainVideo;
