import React from 'react';
import Avatar from '../Avatar/Avatar';
import './ConversationInput.scss';

function ConversationInput() {
	return (
		<div className="conversation">
			<h1 className="conversation-heading">3 Comments</h1>
			<form className="conversation-input">
				<span className="conversation-avatar">
					<Avatar />
				</span>
				<span className="conversation-container">
					<span className="conversation-title">JOIN THE CONVERSATION</span>
					<span className="conversation-form">
						<textarea
							className="conversation-box"
							name="conversation-box"
							placeholder="Add a new comment"
							required
						/>
						<button className="conversation-btn">COMMENT</button>
					</span>
				</span>
			</form>
		</div>
	);
}

export default ConversationInput;
