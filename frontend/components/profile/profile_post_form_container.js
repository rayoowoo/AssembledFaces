import {connect} from 'react-redux'
import PostForm from '../post/post_form'
import {withRouter} from 'react-router-dom'
import {createPost} from '../../actions/post_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
    createPost: post => dispatch(createPost(post))
})

export default withRouter(connect(msp, mdp)(PostForm));