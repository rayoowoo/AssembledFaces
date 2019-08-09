import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {logout, signup} from './actions/session_actions'
import {createLike} from './actions/like_actions'


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
    window.createLike = createLike;
    window.test = {user_id: 108, likeable_id: 145, likeable_type: "Post" }

     
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})