import './CommentsTally.scss';
import React, { Component } from 'react';

class CommentsTally extends Component {
    render() {
        return (
            <>
            <section className='tally_container'>
                <h2 className='total' >3 Comments</h2> 
            </section>
            </>
        )
    };
};

export default CommentsTally;
