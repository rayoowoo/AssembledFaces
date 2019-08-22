import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {createTag} from './actions/tag_actions'


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
    window.createTag = createTag;
    window.test = {user_id: 155, post_id: 266 }

     
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})