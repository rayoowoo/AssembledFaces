import PostIndex from '../post/post_index'
import {connect} from 'react-redux'
import {fetchAllPosts} from '../../actions/post_actions'
import {withRouter} from 'react-router-dom'

const msp = state => ({
    posts: Object.values(state.entities.posts) || []
})

const mdp = dispatch => ({
    fetchPosts: () => dispatch(fetchAllPosts())
})

export default withRouter(connect(msp, mdp)(PostIndex));