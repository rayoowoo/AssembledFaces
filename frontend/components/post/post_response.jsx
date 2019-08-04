import React from 'react'
import {connect} from 'react-redux'

class PostResponse extends React.Component {
    constructor(props) {
        super(prop)
    }

    render() {
        return (
            <section className="post-response">
                <div className="post-feedback">
                    <p>Steve Rogers</p>
                    <p>1 Comment</p>
                </div>
                <div className="post-icons">
                    <p><i className="fas fa-thumbs-up"></i>Like</p>
                    <p><i className="fas fa-message"></i>Comment</p>
                    <p><i className="fas fa-share"></i>Share</p>
                </div>
                <div className="post-comments">
                    {/* <CommentIndex />
                    <CommentForm/> */}
                </div>

            </section>
        )
    }
}

// const mdp = dispatch => ({
//     fetchComments: 
// }) no comments frontend routes yet

export default PostResponse;