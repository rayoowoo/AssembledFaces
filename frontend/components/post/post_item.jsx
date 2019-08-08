import React from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost, updatePost} from '../../actions/post_actions'
import {Link, withRouter, Route} from 'react-router-dom'
import PostResponse from './post_response'


class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
    }

    editPost(e) {
        e.preventDefault();
        this.refs.postBody.classList.toggle("post-display");
        this.refs.postForm.classList.toggle("post-display");
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
        const {post, author, user, currentUser, friendships = []} = this.props;

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

        // Steve Rogers ▶ Tony Stark
        const authoruser = post.author_id !== post.user_id  ? (
            <p className="post-content-author">
                    <Link to={`/user/${post.author_id}`} user={author} >
                        {author.first_name} {author.last_name}
                    </Link><i className="fas fa-caret-right"></i><Link to={`/user/${user.id}`} user={user} >
                        {user.first_name} {user.last_name}
                    </Link></p>

        ) : (
            <p className="post-content-author">
                <Link to={`/user/${post.author_id}`} user={author} >
                    {author.first_name} {author.last_name}
                </Link></p>
        )

        // only show the response section if the current user is a friend of the post author
        const acceptedFriendships = friendships.filter(friendship => friendship.status === "accepted").map(friendship => {
            if (friendship.requester_id === this.props.author.id){
                return friendship.requested_id;
            } 
            if (friendship.requested_id === this.props.author.id) {
                return friendship.requester_id;
            }
                
        })

        const response = acceptedFriendships.includes(this.props.currentUser.id) || currentUser.id === author.id ? (<PostResponse postId={post.id} currentUserId={currentUser.id} />) : null

        return (
            <section className="postitem">
                
                    {btns}
                <section className="postitem-top">
                    
                    <div className="post-content-picture post-picture">
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
                            <div className="signup-submit-btn">Cancel</div>
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
    return ({
        author: state.entities.users[ownProps.post.author_id] || {},
        currentUser : state.entities.users[state.session.id],
        user: state.entities.users[ownProps.post.user_id] || {}
    })
}

const mdp = dispatch => ({
    fetchPost: (userId, postId) => dispatch(fetchPost(userId, postId)),
    deletePost: postId => dispatch(deletePost(postId)),
    updatePost: post => dispatch(updatePost(post))
})

export default withRouter(connect(msp, mdp)(PostItem));

