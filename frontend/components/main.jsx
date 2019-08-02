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
            <>
                <Route path="/user/:user_id" component={Profile} />
                <Route path="/" component={NewsFeed} />
            </>
        )
    return (
        <>
            <Switch>
                {display}
            </Switch>
        </>
    )
}

const msp = state => ({
    currentUserId: state.session.id
})

export default connect(msp)(Main);

