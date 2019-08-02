import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class NewsFeed extends React.Component {
    render() {
        return (
            <div>
                <h1>News Feed coming soon</h1>
                <button onClick={e => { e.preventDefault(); this.props.history.push(`/user/${this.props.currentUserId}`) }}>Click for Profile</button>
            </div>
        )
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

export default withRouter(connect(msp)(NewsFeed))