import React from 'react';
import axios from 'axios';
import VideoUploadForm from '../../components/VideoUploadForm/VideoUploadForm';
import VideoListArray from '../../components/VideoListArray/VideoListArray';



class upload extends React.Component {
    render() {
        return (
            <>
            <VideoUploadForm  />
            </>
        );
    }
}

export default upload;