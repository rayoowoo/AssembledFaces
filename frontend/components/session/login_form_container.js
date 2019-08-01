import { connect } from 'react-redux'
import LoginForm from './login_form'
import { login, clearSessionErrors } from '../../actions/session_actions'

const msp = state => ({
    errors: state.errors.session
})


const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})


export default connect(msp, mdp)(LoginForm)