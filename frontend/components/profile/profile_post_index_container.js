import { connect } from 'react-redux'
import PostIndex from '../post/post_index'
import {fetchTimelinePosts} from '../../actions/post_actions'
import {withRouter} from 'react-router-dom'


const msp = (state, ownProps) => {

    let commonProps = {
        posts: Object.values(state.entities.posts) || [],
        userId: ownProps.match.params.userId,
        friendships: Object.values(state.entities.friendships) || []
    }

    if (ownProps.user === undefined) {
        Object.assign(commonProps, { user: state.entities.users[ownProps.userId] })
    }
    
    return commonProps;
}

const mdp = dispatch => ({
    fetchPosts: (userId) => dispatch(fetchTimelinePosts(userId))
})


export default withRouter(connect(msp, mdp)(PostIndex));