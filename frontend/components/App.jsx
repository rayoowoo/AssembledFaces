import React from 'react'
import NavBar from './nav/navbar'
import Main from './main'
import Modal from './Modal'

const App = ({store}) => {
    return (
        <>
            <Modal />
            <NavBar />
            <Main />
        </>
    )
}

export default App;