import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {logout, signup} from './actions/session_actions'


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
    window.signup = signup;
    window.test = {id: 7, body: "Rumlow wish he did.", author_id: 39, post_id: 20}

     
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})