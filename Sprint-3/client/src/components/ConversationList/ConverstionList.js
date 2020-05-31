import React from 'react';
import './conversationList.scss';
import image from '../../assets/images/blank.jpg';

const ConversationList = props => {   
  const conversationsList = props.conversationsHistory.map((conversations,index) => {   
  return (
  <section className="comments-section" key={conversations.id}>
    <div className="comments-single">
      <img className="comments-avatar" src={image} alt="display pic"></img>
      <span className="comments-text">
        <div className="comments-header">
          <h5 className="comments-user">{conversations.name}</h5>  
          <span className="comments-date">{conversations.date}</span>
        </div>  
        <span className="comments-paragraph">{conversations.comment}</span>
      </span>
    </div>
  </section>      
      )
})
   return (<div>{conversationsList}</div>)
}



export default ConversationList;