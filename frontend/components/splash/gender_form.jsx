import React from 'react'

class GenderForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.refs.popup.classList.add("close")
    }

    handleHover(e) {
        e.preventDefault();
        this.refs.popup.classList.remove("close")
    }

    clear(e) {
        e.preventDefault();
        Object.values(this.refs).slice(0,3).forEach (ref => {
            ref.classList.remove("check", "touched");

        })
    }

    handleBlur(e) {
        e.preventDefault();
        if (e.target.value === "DEFAULT") {
            e.target.classList.add("touched");
            if (e.target.classList.contains("touched")) {
                e.target.classList.add("check")
            }
        }
    }

    render() {
        return (
            <div className="gender-form">
                <h3>Gender</h3>
                 <label ref="input5" id="gender-error">
                        <input name="gender" type="radio" value="Female"  required onFocus={this.clear} onClick={this.props.update("gender")}/>
                            <i className="fas fa-exclamation-circle" ></i>
                        <span>Female</span>
                    </label>
                <label ref="input6">
                    <input name="gender" type="radio" value="Male"  required onFocus={this.clear}  onClick={this.props.update("gender")}/>
                        <span>Male</span>
                    </label>
                <span>
                    <label ref="input7">
                        <input id="custom-gender-option" name="gender" required onFocus={this.clear} type="radio" onClick={this.props.update("gender")} value="Custom" />
                        <span>Custom</span>
                        </label>
                        

                        <div className="signup-question-container">
                        <i onMouseOver={this.handleHover} className="fas fa-question-circle signup-question" id="gender-question"></i>
                        <span onClick={this.handleClick} ref="popup" className="signup-question-text"><div className="arrow-right"></div><div className="arrow-right-shadow"></div>
                            <p>You can change who sees your gender on your profile later.
                        Select Custom to choose another gender, or if you'd rather not say.</p>
                            <button onClick={this.handleClick}>Close</button>
                        </span>
                        </div>

                    {/* THIS IS THE CUSTOM GENDER TOOLTIP */}
                    <section className="custom-gender-content">
                        <select onChange={this.props.update("gender")} onBlur={this.handleBlur} onSelect={this.clear} className="custom-gender-select" >
                            <option selected disabled value="DEFAULT">Select your pronoun</option>
                            <option value="She">She: "Wish her a happy birthday!"</option>
                            <option value="He">He: "Wish him a happy birthday!"</option>
                            <option value="They">They: "Wish them a happy birthday!"</option>
                        </select>

                        <i className="fas fa-exclamation-circle"></i>

                        <div id="gender-invalid">
                            Please select your pronoun.
                                <div className="error-arrow-right"></div>
                            <div className="error-arrow-right error-arrow-shadow"></div>
                        </div>

                        <p>Your pronoun is visible to everyone.</p>
                        <input type="text" className="text-input" onChange={this.props.update("gender")} placeholder="Enter your gender (optional)" />
                    </section>

                    </span>

                
            </div>
        )
    }

    
}

export default GenderForm