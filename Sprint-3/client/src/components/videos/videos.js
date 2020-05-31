import React from 'react';
import './videos.scss';

class Video extends React.Component {
  render () {
    return (
      <section className="video" key={this.props.id}>
      <img className="video__img" src={this.props.image} alt="video" />
      <div className="video-text">
        <span className="video-title">{this.props.title}</span>
        <span className="video-author">{this.props.channel}</span>
      </div>
    </section>
    )
  }
}

export default Video