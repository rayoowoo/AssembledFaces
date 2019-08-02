import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {logout, signup} from './actions/session_actions'
import * as hi from './actions/user_actions'


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
    window.updateUser = hi.updateUser;
    window.test = {email: "steve@gmail.com", 
                    password: "steverogers", 
                    birth_date: new Date("7/4/1918"), 
                    gender: "Male", 
                    first_name: "Steve", 
                    last_name: "Rogers", 
                    location: "New York", 
                    workplace: "Avengers", 
                    education: "West Point", 
                    current_city: "New York", 
                    hometown: "Brooklyn", 
                    bio: "I am Steve Rogers."}
     
    // TESTING

    ReactDOM.render(<Root store={store}/>, root)
})