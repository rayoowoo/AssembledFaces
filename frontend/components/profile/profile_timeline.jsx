import React from 'react'
import ProfilePostForm from './profile_post_form_container'
// import ProfilePostIndex from './profile_post_index'
import {connect} from 'react-redux'

class ProfileTimeline extends React.Component {

    render() {
        return (
            <div className="profile-timeline">
                <ProfilePostForm />
                {/* <ProfilePostIndex posts={posts}/> */}
            </div>
        )
    }
}

const msp = state => ({
    posts: state.entities.posts
})

const mdp = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(msp, mdp)(ProfileTimeline);