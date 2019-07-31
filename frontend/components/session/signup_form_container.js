import { connect } from 'react-redux'
import SignupForm from './signup_form'
import {signup, login} from '../../actions/session_actions'

const msp = state => ({
    errors: state.errors.session
})


const mdp = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
})


export default connect(msp, mdp)(SignupForm)