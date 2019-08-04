import React from 'react'
import ProfilePictureArea from './profile_picture_area'
import ProfileNav from './profile_nav'
import ProfileSideBar from './profile_side_bar'
import ProfileTimeline from './profile_timeline'
import {connect} from 'react-redux'


class Profile extends React.Component {

    render() {
        const { user } = this.props;
        return (
            <section className="profile">
                <div className="profile-content">
                    <ProfilePictureArea user={user}/>
                    <ProfileNav user={user}/>
                    <div className="profile-main">
                        <ProfileSideBar user={user}/>
                    <ProfileTimeline user={user}/>
                    </div>
                </div>
            </section>
          
        )
    }
}

const msp = (state, ownProps) => {
    debugger
    return {
        user: state.entities.users[ownProps.match.params.userId] || {}
    }
}

export default connect(msp)(Profile);

//  user={props.location.match.params.userId}