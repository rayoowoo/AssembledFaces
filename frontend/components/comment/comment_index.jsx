import React from 'react'
import {connect} from 'react-redux'
import CommentItem from './comment_item'


class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comments, postId } = this.props;
        const allComments = comments.map( comment => {
            if (postId === comment.post_id && comment.parent_comment_id === null) {
                const childComments = comments.filter( child => child.parent_comment_id === comment.id)
                debugger
                return <CommentItem key={`comment-${comment.id}`} comment={comment} childComments={Object.values(childComments)} />
            }
        })

        return (
           <>
            {allComments}
           </>
        )
    }
}

const msp = (state, ownProps) => {
    debugger
    if (ownProps.comments === undefined) {
        return {
            comments: Object.values(state.entities.comments) || []
        }
    } 
    else {
        return {};
    }
}

export default connect(msp)(CommentIndex);

// postId={this.props.post.id} currentUserId={this.props.currentUserId}