import React from 'react'
import {connect} from 'react-redux'
import { Link, withRouter, Route } from 'react-router-dom'
import CommentIndex from './comment_index'



class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        const children = this.props.childComments.length > 0 ? <div className="child-comments"><CommentIndex child={true} comments={this.props.childComments} /></div> : null;
        const {comment: {body, created_at}, author} = this.props;
        return (
            <section className="comment-item">
                <div className="comment-picture">
                    <img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt="" />
                    {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                </div>
                <section className="comment-content" >
                    <div className="comment-content-main">
                        <p className="comment-content-author"><Link to={`/user/${this.props.comment.author_id}`} user={author} >{author.first_name} {author.last_name}</Link></p>
                        <p>{body}</p>
                    </div>
                 
                    <section className="comment-response">
                        <span className="comment-response-links">Like</span>
                        <span className="dot">  ·  </span>
                        <span className="comment-response-links">Reply</span>
                        <span className="dot">  ·  </span>
                        <span>{created_at.date}</span>
                    </section>
                </section>
                {children}
            </section>
            
        )
    }
}

const msp = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.comment.author_id] || {}
    }
}

export default connect(msp)(CommentItem);
