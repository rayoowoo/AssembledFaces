import React from 'react'
import { connect } from 'react-redux'
import SplashNavBar from './splash_navbar'
import ProfileNavBar from './profile_navbar'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                {this.props.currentUserId === null? <SplashNavBar /> : <ProfileNavBar />}
            </div>
        )
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

export default connect(msp)(NavBar);

