import React from 'react';
import NavBar from './nav/navbar';
import Main from './main';
import Modal from './Modal';
import Chatroom from './chat/chatroom';
import {withRouter} from 'react-router-dom';

const App = (props) => {
    const display = props.location.pathname === "/messenger" ? (
        <Chatroom />
    ) : (
        <>
            <Modal />
            <NavBar />
            <Main />
        </>
    )
    return display
}

export default withRouter(App);