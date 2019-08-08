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

    render() {
        const { comments = {} } = this.props;
        const allComments = comments.map( comment => {
                if (comment.parent_comment_id === null) {
                const childComments = comments.filter( child => child.parent_comment_id === comment.id)
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
    const comments = Object.values(state.entities.comments).filter( comment => comment.post_id === ownProps.postId) || []
    return {comments}
}

export default connect(msp)(CommentIndex);

// postId={this.props.post.id} currentUserId={this.props.currentUserId}