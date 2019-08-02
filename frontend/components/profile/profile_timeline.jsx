import React from 'react'
// import ProfilePostForm from './profile_post_form'
// import ProfilePostIndex from './profile_post_index'
import {connect} from 'react-redux'

class ProfileTimeline extends React.Component {

    render() {
        return (
            <div className="profile-timeline">
                <h1>PROFILE TIMELINE</h1>
                {/* <ProfilePostForm />
                <ProfilePostIndex posts={posts}/> */}
            </div>
        )
    }
}

const msp = state = ({
    posts: state.entities.posts
})

const mpd = dispatch = ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(msp, mdp)(ProfileTimeline);