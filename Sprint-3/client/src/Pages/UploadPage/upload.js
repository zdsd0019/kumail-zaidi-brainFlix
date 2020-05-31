import React from 'react';
import axios from 'axios';
import VideoUploadForm from '../../components/videoUploadForm/videoUploadForm'
import VideoListArray from '../../components/VideoListArray/VideoListArray';
const url = process.env.REACT_APP_API_URL;


class upload extends React.Component {
    state = {
        title: '',
        description: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleVideoSubmit = videos => {
        axios
            .post(`${url}/videos`, VideoListArray)
            .then(request => console.log('Video was Successfully Uploaded'));
            
    }
   

    render() {
        return (
            <>
            <VideoUploadForm handleVideoSubmit={this.handleVideoSubmit} />
            </>
        );
    }
}

export default upload;