import React from 'react';
import Views from '../../assets/icons/svg/icon-views.svg';
import Likes from '../../assets/icons/svg/icon-likes.svg';
import './videoTitle.scss';

const videoDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

class VideoDescription extends React.Component {
    render() {
        return (
            <>
              <section className='title-section'>
        <h1 className='title'>{this.props.currentInformation.title}</h1>
          <article className='article'>
            <div className="author">
              <span className="author__video">{this.props.currentInformation.channel}</span>
              <span className="author__date">{videoDate(this.props.currentInformation.timestamp)}</span>
            </div>
            <div className="total">
              <span className='total-align'><img src={Views} alt="Total View" className='total-views'></img>{this.props.currentInformation.views}</span>
              <span className='total-align'><img src={Likes} alt="Total Likes" className='total-likes'></img>{this.props.currentInformation.likes}</span>
            </div>
          </article>
          <div>
            <p className="description">
              {this.props.currentInformation.description}
            </p>
          </div>
        </section>  
            </>
        );
    }
}

export default VideoDescription;