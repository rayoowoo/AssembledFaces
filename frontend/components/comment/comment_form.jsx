import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../actions/comment_actions'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.assignSelect = this.assignSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlSubmit = this.handleSubmit.bind(this);
        this.state = {
            body: "",
            post_id: this.props.postId,
            author_id: this.props.currentUserId
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
        this.props.createComment(this.props.postId, this.state);
        this.setState({ body: "" })
    }



    render() {
        let submit;
        const photo = this.props.currentUser.photoUrl ? <img src={this.props.currentUser.photoUrl} alt="" /> : null

        if (this.state.body === "") {
            submit = <input className="postform-submit disabled-btn" disabled type="submit" value="Post" />
        } else {
            submit = <input ref="submit" className="postform-submit" type="submit" value="Post" />
        }

        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="commentinput">
                    <div className="comment-picture">
                        {photo}
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                <textarea ref="commentforminput" onChange={this.handleChange} type="text" placeholder={`Write a comment...`} value={this.state.body}></textarea>

                <span className="commentinput-buttons-container">
                    <i className="far fa-smile"></i>
                    <i className="fas fa-camera"></i>
                    <i className="far fa-file-video"></i>
                    <i className="far fa-sticky-note"></i>
                </span>
                
                <div className="postform-submit-container" id="comment-submit-container">
                    {submit}
                </div>
            </form>
        )
    }
}

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[ownProps.currentUserId]
})

const mdp = dispatch => ({
    createComment: (postId, comment) => { return dispatch(createComment(postId, comment))}
})

export default connect(msp, mdp)(CommentForm);