import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import CommentIndexChildren from './comment_index_children'
import {deleteComment, updateComment} from '../../actions/comment_actions'
import CommentForm from './comment_form'



class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.editComment = this.editComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = this.props.comment;
        this.oldBody = this.props.comment.body;
        // this.turnOn = this.turnOn.bind(this);
        // this.turnOff = this.turnOff.bind(this);
        this.toggle = true;
    }

    editComment(e) {
        e.preventDefault();
        this.toggle = true;
        this.refs.commentBody.classList.remove("comment-display");
        this.refs.commentForm.classList.add("comment-display");
        document.addEventListener("mousedown", e => {
            e.stopPropagation();
            if (this.toggle === true) {
                if (e.target.name !== "comment-edit-form-textarea" && e.target.name !== "comment-body") {
                    this.refs.commentBody.classList.add("comment-display");
                    this.refs.commentForm.classList.remove("comment-display");
                    this.setState( {body: this.oldBody})
                    this.toggle = false;
                }
            }
          
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateComment(this.state);
        this.refs.commentBody.classList.toggle("comment-display");
        this.refs.commentForm.classList.toggle("comment-display");
    }

    clear(e) {
        this.editComment(e);
        this.setState({ body: this.oldBody })
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

    openForm(e) {
        e.preventDefault();
        this.refs.childForm.classList.add("comment-form-display")
    }


    render() {
        const {childComments, comment, author, currentUser, child} = this.props;
        const children = childComments.length > 0 ? <div className="child-comments"><CommentIndexChildren parentCommentId={comment.id} childComments={childComments} /></div> : null;
        const {comment: {body, created_at} } = this.props;
        const reply = Boolean(comment.parent_comment_id) === false ? (<><p onClick={this.openForm.bind(this)} className="comment-response-links">Reply</p>
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

        const childForm = child ? null : <CommentForm child={true} postId={comment.post_id} commentId={comment.id} updateCount={this.updateCount} currentUserId={currentUser.id}/>;

        const response = currentUser.friend_ids.includes(author.id) || currentUser.id === author.id ? 
        (<section className="comment-response">
            <p className="comment-response-links">Like</p>
            {btns}
            <span className="dot">  ·  </span>
            {reply}
            <p>{created_at.date}</p>
        </section>
        ) : null

        return (
            <>
    
                <div className="comment" >
                    <section className="comment-item">
                        <div className="comment-picture">
                                <Link to={`/user/${comment.author_id}`}>{photo}</Link>
                            {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                        </div>
                        <section name="comment-body" className="comment-content" >
                            <div ref="commentBody" name="comment-body" className="comment-content-main comment-body comment-display">
                                <p name="comment-body" className="comment-content-author"><Link to={`/user/${comment.author_id}`} user={author} >{author.first_name} {author.last_name}</Link></p>
                                <p name="comment-body" >{body}</p>
                            </div>

                            <form ref="commentForm" onSubmit={this.handleSubmit.bind(this)} className="comment-edit-form">

                                <textarea onChange={this.update.bind(this)} name="comment-edit-form-textarea" value={this.state.body}></textarea>
                                <section>
                                    <div ref="cancel"></div>
                                    <button ref="submit"></button>
                                </section>
                                

                            </form>
                            {response}
                        </section>
                    </section>
                    <div id="childForm" ref="childForm">{childForm}</div>
                    </div>
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
