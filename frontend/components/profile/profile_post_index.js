import { connect } from 'react-redux'
import PostIndex from '../post/post_index'
import {fetchTimelinePosts} from '../../actions/post_actions'
import {withRouter} from 'react-router-dom'


const msp = state => ({
    posts: state.entities.posts
})

const mdp = dispatch => ({
    fetchTimelinePosts: (userId) => dispatch(fetchTimelinePosts(userId))
})

export default withRouter(connect(msp, mdp)(PostIndex));