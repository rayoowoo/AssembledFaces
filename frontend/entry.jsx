import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
// import * as SessionAPIUtil from './utils/session_api_utils'
import Root from './components/root'
import {logout} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser
    } else {
        store = configureStore();
    }
    
    // TESTING
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})