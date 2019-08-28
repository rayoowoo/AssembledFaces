import React from 'react'
import CommentItem from './comment_item'


class CommentIndexChildren extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { childComments = {} } = this.props;
        const allComments = childComments.map(comment => {
            if (comment.parentCommentId === this.props.parentCommentId) {
                return <CommentItem key={`comment-${comment.id}`} comment={comment} childComments={[]} child={true}/>
            }
        })

        return (
            <>
                {allComments}
            </>
        )
    }
}

export default CommentIndexChildren;

//<CommentIndexChildren childComments={this.props.childComments} /></div>
