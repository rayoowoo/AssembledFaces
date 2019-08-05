import React from 'react'
import CommentForm from '../comment/comment_form'
import CommentIndex from '../comment/comment_index'

class PostResponse extends React.Component {
    constructor(props) {
        super(props)
    }

    selectOption(e) {
        e.preventDefault();
        // later some code to handle likes.
        e.target.classList.toggle("selected");
    }

    clickComment(e) {
        e.preventDefault();
        debugger
        this.refs.commentform.childNodes[0].childNodes[1].focus()
        this.refs.commentform.childNodes[0].childNodes[1].click()
    }

    render() {
        return (
            <section className="post-response">
                <div className="post-feedback">
                    <p><span><i className="fas fa-thumbs-up"></i></span>Steve Rogers</p>
                    <p>1 Comment</p>
                </div>
                <div className="post-icons">
                    <p onClick={this.selectOption.bind(this)} ><i className="fas fa-thumbs-up"></i>Like</p>
                    <p onClick={this.clickComment.bind(this)}><i className="fas fa-comment"></i>Comment</p>
                    <p><i className="fas fa-share"></i>Share</p>
                </div>
                <div className="post-comments">
                    <CommentIndex postId={this.props.postId} currentUserId={this.props.currentUserId}/>
                    <div ref="commentform"><CommentForm postId={this.props.postId} currentUserId={this.props.currentUserId}/></div>
                </div>

            </section>
        )
    }
}

export default PostResponse;