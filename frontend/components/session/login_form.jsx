import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            email: "",
            password: "",
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    componentWillReceiveProps() {
        this.props.history.push("/login");
        this.props.clearSessionErrors();
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.email === "" && this.state.password === "") {
            this.props.history.push("/login")
            return
        }
        if (this.state.email === "" && this.state.password !== "") {
            this.props.history.push("/recover")
            return
        }
        this.props.login(this.state).then(() => {
             this.setState({
                email: "",
                password: ""
            })
        })
           
    }


    render() {

        return (
        <form onSubmit={this.handleSubmit}>
                <label><span className="baseform">Email</span>
                <input type="text" onChange={this.update("email")} value={this.state.email}/>
            </label>
                <label><span className="baseform">Password</span>
                <input type="password" onChange={this.update("password")} value={this.state.password}/>
                    {/* <a href="https://www.youtube.com/watch?v=K_8SBYQ4SI0" target="_blank">Forgot account?</a> */}
                <a onClick={e => this.props.history.push("/recover")} target="_blank">Forgot account?</a>
            </label>
            <input type="submit" value="Log In"/>
        </form>
        )
    }
}

export default LoginForm