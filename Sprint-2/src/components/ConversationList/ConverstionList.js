import React from 'react';
import './ConversationList.scss';
import image from '../../assets/images/blank.jpg';

const ConversationList = props => {   
  console.log(props);  
  const ConversationsList = props.ConversationsHistory.map((conversations,index) => {   
  return (
  <section className="comments-section" key={conversations.id}>
    <div className="comments-single">
      <img className="comments-avatar" src={image} alt="display pic"></img>
      <article className="comments-text">
        <div className="comments-header">
          <h5 className="comments-user">{conversations.name}</h5>  
          <span className="comments-date">{conversations.date}</span>
        </div>  
        <span className="comments-paragraph">{conversations.comment}</span>
      </article>
    </div>
  </section>      
      )
})
   return (<div>{ConversationsList}</div>)
}



export default ConversationList;