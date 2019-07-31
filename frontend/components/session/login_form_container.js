import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login } from '../../actions/session_actions'

const msp = state => ({
    errors: state.errors.session
})


const mdp = dispatch => ({
    login: user => dispatch(login(user))
})


export default connect(msp, mdp)(LoginForm)