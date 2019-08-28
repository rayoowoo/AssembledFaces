import React from 'react'
import {connect} from 'react-redux'
import CommentItem from './comment_item'


class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countComment: 0
        }
    }

    componentDidMount() {
        this.props.updateCount(this.props.comments.length)
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.comments.length !== this.props.comments.length) {
            this.props.updateCount(this.props.comments.length)
        }
    }

    render() {
        const { comments = {} } = this.props;
        const allComments = comments.map( comment => {
                if (comment.parentCommentId === null) {
                const childComments = comments.filter( child => child.parentCommentId === comment.id)
                return <CommentItem key={`comment-${comment.id}`} child={false} comment={comment} childComments={Object.values(childComments)} />
                }
            }
        )

        return (
           <>
            {allComments}
           </>
        )
    }
}

const msp = (state, ownProps) => {
    const comments = Object.values(state.entities.comments).filter( comment => comment.postId === ownProps.postId) || []
    return {comments}
}

export default connect(msp)(CommentIndex);

// postId={this.props.post.id} currentUserId={this.props.currentUserId}