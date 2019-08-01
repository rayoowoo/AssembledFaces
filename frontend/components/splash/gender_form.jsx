import React from 'react'

class GenderForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.refs.popup.classList.add("close")
    }

    handleHover(e) {
        e.preventDefault();
        this.refs.popup.classList.remove("close")
    }

    render() {
        return (
            <div className="gender-form">
                <h3>Gender</h3>
                    <label>
                        <input name="gender" type="radio" value="Female" ref="input-5" required onClick={this.props.update("gender")}/>
                        <span>Female</span>
                    </label>
                    <label>
                        <input name="gender" type="radio" value="Male" ref="input-6" required onClick={this.props.update("gender")}/>
                        <span>Male</span>
                    </label>
                    <label>
                    <input id="custom-gender-option" name="gender" ref="input-7" required type="radio" onClick={this.props.update("gender")} value="Custom"/>
                        <span>Custom</span>

                        <div className="signup-question-container">
                        <i onMouseOver={this.handleHover} className="fas fa-question-circle signup-question"></i>
                        <span onClick={this.handleClick} ref="popup" className="signup-question-text"><div className="arrow-right"></div><div className="arrow-right-shadow"></div>
                            <p>You can change who sees your gender on your profile later.
                        Select Custom to choose another gender, or if you'd rather not say.</p>
                            <button onClick={this.handleClick}>Close</button>
                        </span>
                        </div>

                    <section id="custom-gender-content">
                        <select onChange={this.props.update("gender")} onMouseUp={this.props.touch} className="custom-gender-select" >
                            <option selected disabled value="">Select your pronoun</option>
                            <option value="She">She: "Wish her a happy birthday!"</option>
                            <option value="He">He: "Wish him a happy birthday!"</option>
                            <option value="They">They: "Wish them a happy birthday!"</option>
                        </select>

                        <div id="gender-invalid">
                            Please select your pronoun.
                                <div className="error-arrow-right"></div>
                            <div className="error-arrow-right error-arrow-shadow"></div>
                        </div>



                        <p>Your pronoun is visible to everyone.</p>
                        <input type="text" className="text-input" onChange={this.props.update("gender")} placeholder="Enter your gender (optional)" />
                    </section>

                    </label>

                
            </div>
        )
    }

    
}

export default GenderForm