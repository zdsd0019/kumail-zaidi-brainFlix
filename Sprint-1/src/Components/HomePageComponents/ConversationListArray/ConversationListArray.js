import './ConversationListArray.scss';
import React from 'react';


let ConversationListArray = (props) => {
    return(
        <>
            <section className='list' key={props.id}>
                <span>
                    <img src={props.avatar} alt='User Pic Here' className= 'list_avatar' />
                </span>
       
                <span className='list_wrapper' >
                    <span className='list_container' >
                        <h2 className='list_name' >{props.name}</h2>
                        <h4 className='list_date' > {props.date} </h4>
                    </span>
                    <p className='list_conversation' > {props.conversation} </p> 
                </span> 
            </section>
        </>
    )
}

export default ConversationListArray;