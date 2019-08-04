import React from 'react'
import CommentForm from '../comment/comment_form'

class PostResponse extends React.Component {
    constructor(props) {
        super(props)
    }

    selectOption(e) {
        e.preventDefault();
        // later some code to handle likes.
        e.target.classList.toggle("selected");
    }

    render() {
        return (
            <section className="post-response">
                <div className="post-feedback">
                    <p><span><i className="fas fa-thumbs-up"></i></span>Steve Rogers</p>
                    <p>1 Comment</p>
                </div>
                <div onClick={this.selectOption.bind(this)} className="post-icons">
                    <p><i className="fas fa-thumbs-up"></i>Like</p>
                    <p><i className="fas fa-comment"></i>Comment</p>
                    <p><i className="fas fa-share"></i>Share</p>
                </div>
                <div className="post-comments">
                    {/* <CommentIndex /> */}
                    <CommentForm/>
                </div>

            </section>
        )
    }
}

export default PostResponse;