import React from 'react'
import ProfilePictureArea from './profile_picture_area'
import ProfileNav from './profile_nav'
import ProfileSideBar from './profile_side_bar'
// import ProfileTimeline from './profile_timeline'


class Profile extends React.Component {

    render() {
        return (
            <section className="profile">
                <div className="profile-content">
                    <ProfilePictureArea />
                    <ProfileNav />
                    <div className="profile-main">
                        <ProfileSideBar />
                    {/* <ProfileTimeline /> */}
                        <div id="timeline">
                            <h1>TIMELINE GOES HERE</h1>
                        </div>
                    </div>
                </div>
            </section>
          
        )
    }
}

export default Profile;