import React from 'react'
import ProfilePostForm from './profile_post_form_container'
import ProfilePostIndex from './profile_post_index_container'
import {Route} from 'react-router-dom'

class ProfileTimeline extends React.Component {

    render() {
        return (
            <div className="profile-timeline">
                <ProfilePostForm />
                <Route path="/user/:userId" component={ProfilePostIndex} />
            </div>
        )
    }
}

export default ProfileTimeline