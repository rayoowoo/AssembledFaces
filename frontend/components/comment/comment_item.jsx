import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CommentIndexChildren from './comment_index_children'
import {deleteComment, updateComment} from '../../actions/comment_actions'



class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.editComment = this.editComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.comment;
    }

    editComment(e) {
        e.preventDefault();
        this.refs.commentBody.classList.toggle("comment-display");
        this.refs.commentForm.classList.toggle("comment-display");
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateComment(this.state);
        this.editComment(e);
    }

    update(e) {
        if (e.target.value.slice(-1) === "\n") {
            if (e.target.value.length > 1) {
                this.refs.submit.click();
                return
            } else {
                return
            }
        };
        this.setState({ body: e.target.value })
    }


    render() {
        const {childComments, comment, author, currentUser} = this.props;
        const children = childComments.length > 0 ? <div className="child-comments"><CommentIndexChildren parentCommentId={comment.id} childComments={childComments} /></div> : null;
        const {comment: {body, created_at} } = this.props;
        const reply = Boolean(comment.parent_comment_id) === false ? (<><p className="comment-response-links">Reply</p>
            <span className="dot">  ·  </span></>) : null

        const photo = author.photoUrl ? <img src={author.photoUrl} alt="" /> : null

        let btns = null;
        if (author.id === currentUser.id) {
            btns =
                <>
                    <button onClick={e => this.props.deleteComment(comment)} className="comment-delete-btn"><i className="fa fa-trash"></i></button>
                    <button onClick={this.editComment.bind(this)} className="comment-delete-btn comment-edit-btn"><i className="fa fa-pen"></i></button>
                </>
        }

        const response = currentUser.friend_ids.includes(author.id) || currentUser.id === author.id ? (<section className="comment-response">
            <p className="comment-response-links">Like</p>
            {btns}
            <span className="dot">  ·  </span>
            {reply}
            <p>{created_at.date}</p>
        </section>) : null

        return (
            <>
            <section className="comment-item">
                <div className="comment-picture">
                        <Link to={`/user/${comment.author_id}`}>{photo}</Link>
                    {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                </div>
                <section  className="comment-content" >
                    <div ref="commentBody" className="comment-content-main comment-body comment-display">
                        <p className="comment-content-author"><Link to={`/user/${comment.author_id}`} user={author} >{author.first_name} {author.last_name}</Link></p>
                        <p>{body}</p>
                    </div>

                    <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-edit-form">

                        <textarea onChange={this.update.bind(this)} value={this.state.body}></textarea>
                        <section>
                            <div ref="cancel"></div>
                            <button ref="submit"></button>
                        </section>
                        

                    </form>
                    {response}
                </section>
               
            </section>
             {children}
             </>
        )
    }
}

const msp = (state, ownProps) => {
    return {
        author: state.entities.users[ownProps.comment.author_id] || {},
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = dispatch => ({
    deleteComment: comment => dispatch(deleteComment(comment)),
    updateComment: comment => dispatch(updateComment(comment))
})

export default connect(msp, mdp)(CommentItem);
