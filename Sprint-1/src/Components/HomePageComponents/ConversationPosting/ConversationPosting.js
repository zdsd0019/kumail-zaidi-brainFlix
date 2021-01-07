import './ConversationPosting.scss';
import React, { Component } from 'react';
import ConversationBoxHeading from '../ConversationBoxHeading/ConversationBoxHeading.js';
import UploaderAvatar from '../../UniversalComponent/UploaderAvatar/UploaderAvatar.js';
import ConversationBox from '../ConversationBox/ConversationBox.js';

class ConversationPosting extends Component {
    render() {
        return (
            <>
              <ConversationBoxHeading />
              <section className='grouping' >
                <UploaderAvatar />
                <ConversationBox />  
              </section>
            </>
        )
    };
};

export default ConversationPosting;
