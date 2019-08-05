import React from 'react'
import {connect} from 'react-redux'
import { Link, withRouter, Route } from 'react-router-dom'
import CommentIndexChildren from './comment_index_children'



class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const children = this.props.childComments.length > 0 ? <div className="child-comments"><CommentIndexChildren parentCommentId={this.props.comment.id} childComments={this.props.childComments} /></div> : null;
        const {comment: {body, created_at}, author} = this.props;
        const reply = Boolean(this.props.comment.parent_comment_id) === false ? (<><p className="comment-response-links">Reply</p>
            <span className="dot">  ·  </span></>) : null

        const photo = this.props.author.photoUrl ? <img src={this.props.author.photoUrl} alt="" /> : null

        return (
            <>
            <section className="comment-item">
                <div className="comment-picture">
                        <Link to={`/user/${this.props.comment.author_id}`}>{photo}</Link>
                    {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                </div>
                <section className="comment-content" >
                    <div className="comment-content-main">
                        <p className="comment-content-author"><Link to={`/user/${this.props.comment.author_id}`} user={author} >{author.first_name} {author.last_name}</Link></p>
                        <p>{body}</p>
                    </div>
                 
                    <section className="comment-response">
                        <p className="comment-response-links">Like</p>
                        <span className="dot">  ·  </span>
                        {reply}
                        <p>{created_at.date}</p>
                    </section>
                </section>
               
            </section>
             {children}
             </>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.comment.author_id] || {}
    }
}

export default connect(msp)(CommentItem);
