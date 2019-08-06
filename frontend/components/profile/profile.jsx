import React from 'react'
import ProfilePictureArea from './profile_picture_area'
import ProfileNav from './profile_nav'
import ProfileSideBar from './profile_side_bar'
import ProfileTimeline from './profile_timeline'
import ProfileAbout from './profile_about'
import {connect} from 'react-redux'
import {closeModal, openModal} from '../../actions/modal_actions'
import {Switch, Route} from 'react-router-dom'


class Profile extends React.Component {

    render() {
        const { user } = this.props;
        return (
            <section className="profile">
                <div className="profile-content">
                    <ProfilePictureArea closeModal={this.props.closeModal} openProfile={this.props.openProfile} openCover={this.props.openCover} user={user}/>
                    <ProfileNav user={user} currentUserId={this.props.currentUserId}/>
                    <div className="profile-main">
                    <Route exact path="/user/:userId" render={props => <ProfileSideBar closeModal={this.props.closeModal} openAdd={this.props.openAdd} user={user} />} />
                    <Switch>
                        <Route path="/user/:userId/about" render={props => <ProfileAbout user={user} />} />
                        <Route exact path="/user/:userId" render={props => <ProfileTimeline user={user}/> }/>
                    </Switch>  
                    
                    </div>
                </div>
            </section>
          
        )
    }
}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId] || {},
        currentUserId: state.session.id
    }
}

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openProfile: () => dispatch(openModal("profilePicture")),
        openCover: () => dispatch(openModal("coverPicture")),
        openAdd: () => dispatch(openModal("addPicture"))

    }
}

export default connect(msp, mdp)(Profile);

//  user={props.location.match.params.userId}