import React from 'react'
import ProfilePictureArea from './profile_picture_area'
import ProfileNav from './profile_nav'
import ProfileSideBar from './profile_side_bar'
// import ProfileTimeline from './profile_timeline'


class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
                <ProfilePictureArea />
                <ProfileNav />
                <ProfileSideBar />
                {/* <ProfileTimeline /> */}
            </div>
        )
    }
}

export default Profile;