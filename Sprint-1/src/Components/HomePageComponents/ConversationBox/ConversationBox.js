import './ConversationBox.scss';
import React, { Component } from 'react';
import CommentSubmitButton from '../CommentSubmitButton/CommentSubmitButton.js';

class ConversationBox extends Component {
    render() {
        return (
            <>
            <form className= 'conversation'>
                <textarea className='conversation_box' placeholder='That was easily the most spectacular BMX moment ever.' />
                <CommentSubmitButton />
            </form>
            </>
        )
    };
};
export default ConversationBox;