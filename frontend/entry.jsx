import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
// import * as SessionAPIUtil from './utils/session_api_utils'
import Root from './components/root'


document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root")
    const store = configureStore();
    
    // TESTING
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})