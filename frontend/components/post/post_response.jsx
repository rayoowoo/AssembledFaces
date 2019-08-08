import React from 'react'
import CommentForm from '../comment/comment_form'
import CommentIndex from '../comment/comment_index'

class PostResponse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentCount: 0
        }
        this.updateCount = this.updateCount.bind(this);
    }

    selectOption(e) {
        e.preventDefault();
        // later some code to handle likes.
        e.target.classList.toggle("selected");
    }

    clickComment(e) {
        e.preventDefault();
        this.refs.commentform.childNodes[0].childNodes[1].focus()
        this.refs.commentform.childNodes[0].childNodes[1].click()
    }

    updateCount(count) {
        this.setState({commentCount: count})
    }

    render() {
        let commentCounter = null;
        switch (this.state.commentCount) {
            case 0:
                break;
            case 1:
                commentCounter = "1 Comment";
            default:
                commentCounter = `${this.state.commentCount} comments`;

        }
        return (
            <section className="post-response">
                <div className="post-feedback">
                    <p><span><i className="fas fa-thumbs-up"></i></span>Steve Rogers</p>
                    <p>{commentCounter}</p>
                </div>
                <div className="post-icons">
                    <p onClick={this.selectOption.bind(this)} ><i className="fas fa-thumbs-up"></i>Like</p>
                    <p onClick={this.clickComment.bind(this)}><i className="fas fa-comment"></i>Comment</p>
                    <p><i className="fas fa-share"></i>Share</p>
                </div>
                <div className="post-comments">
                    <CommentIndex postId={this.props.postId} updateCount={this.updateCount} currentUserId={this.props.currentUserId}/>
                    <div ref="commentform"><CommentForm child={false} postId={this.props.postId} currentUserId={this.props.currentUserId}/></div>
                </div>

            </section>
        )
    }
}

export default PostResponse;