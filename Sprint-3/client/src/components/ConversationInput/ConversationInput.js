import React from 'react';
import AvatarMohan from '../avatar/avatar';
import './conversationInput.scss';

function ConversationInput() {
	return (
		<div className="conversation">
			<h1 className="conversation-heading">3 Comments</h1>
			<form className="conversation-input">
				<span className="conversation-avatar">
					<AvatarMohan />
				</span>
				<span className="conversation-container">
					<span className="conversation-title">JOIN THE CONVERSATION</span>
					<form className="conversation-form">
						<textarea className="conversation-box" name="conversation-box" placeholder="Add a new comment" required/>
						<button className="conversation-btn">COMMENT</button>
					</form>
				</span>
			</form>
		</div>
	);
}

export default ConversationInput;
