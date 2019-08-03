import React from 'react'
import ProfilePostForm from './profile_post_form_container'
import ProfilePostIndex from './profile_post_index'

class ProfileTimeline extends React.Component {

    render() {
        return (
            <div className="profile-timeline">
                <ProfilePostForm />
                <ProfilePostIndex />
            </div>
        )
    }
}

export default ProfileTimeline