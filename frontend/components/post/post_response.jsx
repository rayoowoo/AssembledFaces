import React from 'react'
import CommentForm from '../comment/comment_form'
import CommentIndex from '../comment/comment_index'
import {connect} from 'react-redux'
import {createLike, deleteLike} from '../../actions/like_actions'

class PostResponse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentCount: 0,
            likeCount: this.props.likes.length
        }
        this.updateCount = this.updateCount.bind(this);
    }

    componentDidMount() {
        this.setState({likeCount: this.props.likes.length})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.likes.length !== this.props.likes.length) {
            this.setState({ likeCount: this.props.likes.length })

        }
    }

    selectOption(likeId, type) {
        const like = this.refs.like;
        return e => {
            e.preventDefault();
            if (type === "delete") {
                this.props.deleteLike(likeId);
                like.classList.remove("selected")
            } else {
                this.props.createLike({user_id: this.props.currentUserId, likeable_id: this.props.postId, likeable_type: 'Post'})
                like.classList.add("selected")
            }
        }
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
                break
            default:
                commentCounter = `${this.state.commentCount} comments`;
                break
        }
        let likeCounter = null;

        switch (this.state.likeCount) {
            case 0:
                break;
            case 1:
                likeCounter = <><span><i className="fas fa-thumbs-up"></i></span>1 Like</>
                break
            default:
                likeCounter = <><span><i className="fas fa-thumbs-up"></i></span>{this.state.likeCount} likes</>
                break
        }
        
        // handling the like button
        const {likes = []} = this.props;

        let component = <p ref="like" onClick={this.selectOption()}><i className="fas fa-thumbs-up"></i>Like</p>

        const currentUserLike = likes.filter(like => like.userId === this.props.currentUserId);
        if (currentUserLike.length > 0) {
            component = <p ref="like" onClick={this.selectOption(currentUserLike[0].id, "delete")} className="selected"><i className="fas fa-thumbs-up"></i>Like</p>
        }

        return (
            <section className="post-response">
                <div className="post-feedback">
                    <p>{likeCounter}</p>
                    <p>{commentCounter}</p>
                </div>
                <div className="post-icons">
                    {component}
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

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(null, mdp)(PostResponse);