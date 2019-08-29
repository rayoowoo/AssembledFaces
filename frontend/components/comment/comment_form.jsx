import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../actions/comment_actions'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.assignSelect = this.assignSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlSubmit = this.handleSubmit.bind(this);

        const parent = this.props.child ? this.props.commentId : null;
        this.state = {
            body: "",
            postId: this.props.postId,
            authorId: this.props.currentUserId,
            parentCommentId: parent
        }
    }

    assignSelect(e) {
        e.preventDefault();
    }

    handleChange(e) {
        e.preventDefault();
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

    handleSubmit(e) {
        e.preventDefault();
        const {body, postId, authorId, parentCommentId} = this.state;
        const toSubmit = {
            body,
            post_id: postId,
            author_id: authorId,
            parent_comment_id: parentCommentId
        }
        this.props.createComment(this.props.postId, toSubmit);
        e.target.parentNode.classList.remove("comment-form-display");
        this.setState({ body: "" })
    }



    render() {
        let submit;
        const { currentUser = {} } = this.props;
        const photo = currentUser.photoUrl ? <img src={currentUser.photoUrl} alt="" /> : null

        if (this.state.body === "") {
            submit = <input className="postform-submit disabled-btn" disabled type="submit" value="Post" />
        } else {
            submit = <input ref="submit" className="postform-submit" type="submit" value="Post" />
        }

        const idName = this.props.child ? "child-comment-input" : ""

        return (
            <form onSubmit={this.handleSubmit.bind(this)} id={idName} className="commentinput">
                    <div className="comment-picture">
                        {photo}
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                <textarea id="comment-form" ref="commentforminput" onChange={this.handleChange} type="text" placeholder={`Write a comment...`} value={this.state.body}></textarea>

                <span className="commentinput-buttons-container" id="child-comment-input-btns">
                    <i onClick={e => alert("sorry, not implemented yet.")} className="far fa-smile"></i>
                    <i onClick={e => alert("sorry, not implemented yet.")} className="fas fa-camera"></i>
                    <i onClick={e => alert("sorry, not implemented yet.")} className="far fa-file-video"></i>
                    <i onClick={e => alert("sorry, not implemented yet.")} className="far fa-sticky-note"></i>
                </span>
                
                <div className="postform-submit-container" id="comment-submit-container">
                    {submit}
                </div>
            </form>
        )
    }
}

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    createComment: (postId, comment) => { return dispatch(createComment(postId, comment))}
})

export default connect(msp, mdp)(CommentForm);