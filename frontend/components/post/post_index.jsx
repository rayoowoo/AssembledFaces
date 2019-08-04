import React from 'react'
import PostItem from './post_item'


class PostIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchTimelinePosts(this.props.userId);
    }

    render() {
        let allPosts = null;
        if (this.props.posts.length !== 0){ 
            allPosts = this.props.posts.map(post => {
                return <PostItem post={post} key={`post-${post.id}`} />
            })
        }
     
        return (
            <section className="postindex">
                <h1>Posts</h1>           
                {allPosts}
            </section>
        )
    }
}

export default PostIndex;