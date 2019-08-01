import React from 'react'
import NavBar from './nav/navbar'
import Splash from './splash/splash'
import {AuthRoute} from '../utils/route_utils'

const App = ({store}) => {
    return (
        <>
            <NavBar />
            {/* <AuthRoute exact path="/" component={Splash} /> */}
            <Splash />

        </>
    )
}

export default App;