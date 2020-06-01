import React from 'react';
import './VideoUploadForm.scss';
import uploadpic from '../../assets/images/upload-video-preview.jpg';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

class VideoUploadForm extends React.Component {
	state = {
		id: uuidv4(),
		title: '',
		description: '',
		image: uploadpic
	};

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleVideoSubmit = (e) => {
		e.preventDefault(this.state);

		axios.post(`${url}/videos`, this.state).then((request) => console.log(request));
		axios.post(`${url}/videos/${this.state.id}`, this.state).then((request) => console.log(request));
	};

	render() {
		return (
			<form className="upload">
				<h1 className="upload-title">Upload Video</h1>
				<span className="desktop-body">
					<span>
						<h5 className="upload-subtitle">VIDEO THUMBNAIL</h5>
						<img className="upload-image" src={uploadpic} alt="Thumbnail" />
					</span>
					<span className="desktop-align">
						<h5 className="upload-subtitle">TITLE YOUR VIDEO</h5>
						<input
							type="text"
							name="title"
							className="upload-search"
							placeholder="Add a title to your video"
							onChange={this.handleInputChange}
							value={this.state.name}
							required
						/>
						<h5 className="upload-description">ADD A VIDEO DESCRIPTION</h5>
						<textarea
							type="text"
							className="upload-box"
							name="description"
							placeholder="Add a description of your video"
							onChange={this.handleInputChange}
							value={this.state.name}
							required
						/>
					</span>
				</span>
				<span className="tablet-btn">
					<button onClick={this.handleVideoSubmit} className="upload-btn">
						PUBLISH
					</button>
					<button className="upload-btn-cancel">CANCEL</button>
				</span>
			</form>
		);
	}
}

export default VideoUploadForm;
