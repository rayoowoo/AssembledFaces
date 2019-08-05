import React from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../../actions/post_actions'
import {Link, withRouter, Route} from 'react-router-dom'
import PostResponse from './post_response'


class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        
        const {date, time} = this.props.post.created_at;
        let btn = null;
        if (this.props.author.id === this.props.currentUserId) {
            btn = <button onClick={e => this.props.deletePost(this.props.post.id)} className="post-delete-btn"><i className="fa fa-trash"></i></button>
        }
        return (
            <section className="postitem">
                
                    {btn}
                <section className="postitem-top">
                    
                    <div className="post-content-picture post-picture">
                        <img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt="" />
                        {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                    <div className="post-content">
                        <p className="post-content-author"><Link to={`/user/${this.props.post.author_id}`} user={this.props.author} >{this.props.author.first_name} {this.props.author.last_name}</Link></p>
                        <p className="post-content-time">{date} at {time}</p>
                        <span className="dot">  ·  </span>
                        <p className="post-content-city">{this.props.author.current_city}</p>
                    </div>
                
                </section>

                    
                    <p className="post-content-body">{this.props.post.body}</p>
                    <div className="post-content-body-picture">
                        <img src="https://i.ytimg.com/vi/bPTZ43nM688/maxresdefault.jpg" alt=""/>
                        {/* Image sourced from: https://www.instagram.com/p/Bw9nt8mnMGb/ */}
                        </div> 
             
                <PostResponse postId={this.props.post.id} currentUserId={this.props.currentUserId}/>
            </section>
        )
    }
}

const msp = (state, ownProps) => {
    return ({
        author: state.entities.users[ownProps.post.author_id] || {},
        currentUserId : state.session.id
    })
}

const mdp = dispatch => ({
    fetchPost: (userId, postId) => dispatch(fetchPost(userId, postId)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default withRouter(connect(msp, mdp)(PostItem));

