import { connect } from 'react-redux'
import SignupForm from './signup_form'
import {signup} from '../../actions/session_actions'

const msp = state => ({
    errors: state.errors.session,
    formType: "signup"
})


const mdp = dispatch => ({
    processForm: user => dispatch(signup(user))
})


export default connect(msp, mdp)(SignupForm)