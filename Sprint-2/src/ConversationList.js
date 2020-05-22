import { v4 as uuidv4 } from 'uuid';
import blank from './assets/images/blank.jpg';

const ConversationHistory = [ 
  {
    id: uuidv4(),
    userAvatar: blank,
    date: '12/18/2018',
    name: 'Michael Lyons',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
  },
  {
    id: uuidv4(),
    userAvatar: blank,
    date: '12/12/2018',
    name: 'Gary Wong',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
  },
  {
    id: uuidv4(),
    userAvatar: blank,
    date: '11/15/2018',
    name: 'Theodore Duncan',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
  }
];

export default ConversationHistory