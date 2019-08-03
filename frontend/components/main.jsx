import React from 'react'
import Splash from './splash/splash'
import NewsFeed from './newsfeed/newsfeed'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Profile from './profile/profile'

const Main = ({currentUserId}) => {
        const display = currentUserId === null ? (
            <Route path="/" component={Splash} /> 
        ) : (
            <Switch>
                <Route path="/user/:userId" component={Profile} />
                <Route path="/" component={NewsFeed} />
            </Switch>
        )
    return (
        <>
            {display}
        </>
    )
}

const msp = state => ({
    currentUserId: state.session.id
})

export default connect(msp)(Main);

