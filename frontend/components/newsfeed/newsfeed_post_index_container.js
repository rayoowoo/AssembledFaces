import PostIndex from '../post/post_index'
import {connect} from 'react-redux'
import {fetchAllPosts} from '../../actions/post_actions'
import {withRouter} from 'react-router-dom'

const msp = (state, ownProps) => {
    let commonProps = {
        posts: Object.values(state.entities.posts) || [],
        friendships: Object.values(state.entities.friendships) || []
    }
 
    if (ownProps.user === undefined) {
        commonProps = Object.assign(commonProps, { user: state.entities.users[ownProps.userId] })
    }
    
    return commonProps;
}

const mdp = dispatch => ({
    fetchPosts: (id) => dispatch(fetchAllPosts(id))
})

export default withRouter(connect(msp, mdp)(PostIndex));