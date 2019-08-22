import React from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost, updatePost} from '../../actions/post_actions'
import {Link, withRouter, Route} from 'react-router-dom'
import PostResponse from './post_response'


class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.oldBody = this.props.post.body;
    }

    editPost(e) {
        e.preventDefault();
        this.refs.postBody.classList.toggle("post-display");
        this.refs.postForm.classList.toggle("post-display");
        if (e.target.innerHTML === "Cancel") {
            this.setState( {body: this.oldBody} )
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(this.state);
        this.editPost(e);
    }

    update(e) {
        this.setState({body: e.target.value})
    }


    render() {
        const {date, time} = this.props.post.created_at;
        const {post, author, user, currentUser, friendships = [], likes = [], tagged_users = [], post_tagged } = this.props;

        // the delete button and the edit button
        let btns = null;
        if (author.id === currentUser.id) {
            btns = 
            <>
                <button onClick={e => this.props.deletePost(post)} className="post-delete-btn"><i className="fa fa-trash"></i></button>
                <button onClick={this.editPost.bind(this)} className="post-delete-btn post-edit-btn"><i className="fa fa-pen"></i></button>
            </>
        }

        // the icon of the profile picture of the post author
        const photo = author.photoUrl ? <img src={author.photoUrl} alt="" /> : null

        // the photo of the actual post
        const postPhoto = post.photoUrl ? <img src={post.photoUrl} alt="" /> : null

        // tagging
        let tagged;
        if (tagged_users.length > 0 && post_tagged) {
            tagged = <span className="tag"> is with {tagged_users.map( (thisUser, i) => {
                        let result = <Link to={`/user/${thisUser.id}`} key={`tagged-${thisUser.id}`}>{thisUser.first_name} {thisUser.last_name}</Link>;
                        const length = tagged_users.length;
                        if (length === 2 && i === 0) {
                            result = <span key={`tagged-${thisUser.id}`}>{result} and </span>
                        }
                        if (length > 2) {
                            if (i < length - 2) {
                                result = <span key={`tagged-${thisUser.id}`}>{result}, </span>
                            }
                            if (i === length - 2) {
                                result = <span key={`tagged-${thisUser.id}`}>{result}, and </span>
                            }
                        }
                        return result;
                    })
                }.</span>
        }

        // Steve Rogers ▶ Tony Stark
        const authoruser = post.author_id !== post.user_id  ? (
            <p className="post-content-author">
                    <Link to={`/user/${post.author_id}`} user={author} >
                        {author.first_name} {author.last_name}
                    </Link><i className="fas fa-caret-right"></i><Link to={`/user/${user.id}`} user={user} >
                        {user.first_name} {user.last_name}
                    </Link> 
                    </p>

        ) : (
            <p className="post-content-author post-content-author-with-tag">
                <Link to={`/user/${post.author_id}`} user={author} >
                    {author.first_name} {author.last_name}
                </Link>{tagged}</p>
        )

        // only show the response section if the current user is a friend of the post author
        const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted").map(friendship => {
            if (friendship.requester_id === this.props.user.id){
                return friendship.requested_id;
            } 
            if (friendship.requested_id === this.props.user.id) {
                return friendship.requester_id;
            }
        })

        const postLikes = likes.filter(like => {
            return like.likeable_id === post.id && like.likeable_type === "Post"
        })

        const pictureClass = tagged ? " post-picture-with-tag" : ""

        const response = acceptedFriendships.includes(this.props.currentUser.id) || currentUser.id === author.id || currentUser.id === user.id? (<PostResponse postId={post.id} likes={postLikes} currentUserId={currentUser.id} />) : null
        return (
            <section className="postitem">
                
                    {btns}
                <section className="postitem-top">
                    
                    <div className={`post-content-picture post-picture${pictureClass}`}>
                        <Link to={`/user/${author.id}`}>{photo}</Link>
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                    <div className="post-content">
                        {authoruser}
                        <p className="post-content-time">{date} at {time}</p>
                        <span className="dot">  ·  </span>
                        <p className="post-content-city">{this.props.author.current_city}</p>
                    </div>
                
                </section>

                    
                    <p ref="postBody" className="post-display post-content-body">{post.body}</p>
                    <form ref="postForm" onSubmit={this.handleSubmit.bind(this)} className="post-edit-form">
                        <textarea onChange={this.update.bind(this)} value={this.state.body}></textarea>
                        <section className="post-edit-form-btns">
                            <div onClick={this.editPost.bind(this)} className="signup-submit-btn">Cancel</div>
                            <button className="signup-submit-btn">Done Editing</button>    
                        </section>
                        
                    </form>
                    <div className="post-content-body-picture">
                        {postPhoto}
                        
                        </div> 
             
                {response}
            </section>
        )
    }
}

const msp = (state, ownProps) => {
    const tagged_ids = Object.values(state.entities.tags).filter(el => el.post_id === ownProps.post.id).map(el => el.user_id);
    if (ownProps.post.id === 219) {
    }
    return {
        author: state.entities.users[ownProps.post.author_id] || {},
        currentUser : state.entities.users[state.session.id],
        user: state.entities.users[ownProps.post.user_id] || {},
        likes: Object.values(state.entities.likes) || [],
        post_tagged: Object.values(state.entities.tags).map(tag => {return tag.post_id}).includes(ownProps.post.id),
        tagged_users: Object.values(state.entities.users).filter(user => {return tagged_ids.includes(user.id)}) || []
    }
}

const mdp = dispatch => ({
    fetchPost: (userId, postId) => dispatch(fetchPost(userId, postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    updatePost: post => dispatch(updatePost(post))
})

export default withRouter(connect(msp, mdp)(PostItem));

