import React from 'react'
import PostItem from './post_item'
import PostItemSpecial from './post_item_special'


class PostIndex extends React.Component {
    
    componentDidMount() {
        debugger
        if (this.props.user === undefined) {
            this.props.fetchPosts(this.props.user.id);
            return
        }
        this.props.fetchPosts(this.props.user.id);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {this.props.fetchPosts(this.props.user.id);}
    }

    render() {
        let date, time, allPosts = null;
        const {user = {} } = this.props;
        if (this.props.posts.length !== 0){ 
            allPosts = this.props.posts
            .sort( (a,b) => {
                if (a.id < b.id) {
                    return 1;
                } if (a.id === b.id ) {
                    return 0;
                } else {
                    return -1;
                }
            })            
            .map(post => {
                return <PostItem post={post} friendships={this.props.friendships} key={`post-${post.id}`} />
            })
        }

        if (Object.keys(user).length !== 0) {
            const { created_at = {} } = this.props.user;
            date = created_at.date;
            time = created_at.time;
        }


        let postsHeader, specials;

        if (this.props.location.pathname !== "/") {
            postsHeader = "Posts";
            specials = (
                <>
                    <PostItemSpecial user={user} date={date} time={time} />
                    <PostItemSpecial user={user} />
                </>
            )
        }

        return (
            <section className="postindex">
                <h1>{postsHeader}</h1>           
                {allPosts}
                {specials}
            </section>
        )
    }
}

export default PostIndex;