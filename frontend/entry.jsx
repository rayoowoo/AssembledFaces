import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import * as SessionAPIUtil from './utils/session_api_utils'

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root")
    // const store = configureStore();
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.signup = SessionAPIUtil.signup;

    ReactDOM.render(<h1>hi</h1>, root)
})