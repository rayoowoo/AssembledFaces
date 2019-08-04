import React from 'react'
import PostItem from './post_item'
import {connect} from 'react-redux'


class PostIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchTimelinePosts(this.props.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {this.props.fetchTimelinePosts(this.props.userId);}
    }

    render() {
        let date, time, allPosts = null;
        if (this.props.posts.length !== 0){ 
            allPosts = this.props.posts.map(post => {
                return <PostItem post={post} key={`post-${post.id}`} />
            })
        }

        if (Object.keys(this.props.user).length !== 0) {
            const { created_at } = this.props.user;
            date = created_at.date;
            time = created_at.time;
        }

        debugger
        return (
            <section className="postindex">
                <h1>Posts</h1>           
                {allPosts}
                {/* make the next two into actual posts. they're special post items. */}
                <div>JOINED ASSEMBLED PAGES {date} at {time}</div> 
                <div>Born on {this.props.user.birth_date}</div>
            </section>
        )
    }
}

const msp = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[ownProps.userId] || {}
    }
}

export default connect(msp)(PostIndex);