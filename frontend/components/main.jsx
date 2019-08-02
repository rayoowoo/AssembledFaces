import React from 'react'
import Splash from './splash/splash'
import NewsFeed from './newsfeed/newsfeed'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import Profile from './profile/profile'

const Main = ({currentUserId}) => {
    return (
        <>
            <Switch>
                <Route path="/user/:user_id" render={ (props) => <Profile currentUserId={currentUserId}/> } />
                <Route path="/" component={currentUserId === null ? Splash : NewsFeed} />
            </Switch>
            
        </>
    )
}

const msp = state => ({
    currentUserId: state.session.id
})

export default connect(msp)(Main);

