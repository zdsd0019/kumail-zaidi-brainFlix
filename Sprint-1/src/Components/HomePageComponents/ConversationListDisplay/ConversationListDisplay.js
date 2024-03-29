import { v4 as uuidv4 } from 'uuid';
import blank from '../../../assets/images/blank.jpg';
import ConversationListArray from '../ConversationListArray/ConversationListArray.js';
import React from 'react';


let ConversationList = [
    {
        id: uuidv4(),
        avatar: blank,
        name: 'Micheal Lyons',
        date: '12/18/2018',
        conversation: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        id: uuidv4(),
        avatar: blank,
        name: 'Gary Wong',
        date: '12/18/2018',
        conversation: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
    },
    {
        id: uuidv4(),
        avatar: blank,
        name: 'Theodore Duncan',
        date: '11/15/2018',
        conversation: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    },
];

let ConversationListDisplay = (props) => {
    
    return (
        <section>
        {
            ConversationList.map(Convo => 
                <ConversationListArray key={Convo.id}
                 avatar={Convo.avatar} 
                 name={Convo.name} 
                 date={Convo.date} 
                 conversation={Convo.conversation} 
                />
            )
        }    
        </section>         
    )
}

export default ConversationListDisplay;