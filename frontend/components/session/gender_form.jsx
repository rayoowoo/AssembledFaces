import React from 'react'

export default (props) => {
    return (
        <div>
            <label><h3>Gender</h3>
                <label>
                    <input name="gender" type="radio" />
                    <span>Female</span>
                </label>
                <label>
                    <input name="gender" type="radio" />
                    <span>Male</span>
                </label>
                <label>
                    <input name="gender" type="radio" />
                    <span>Custom</span>
                </label>
            </label>
            <i className="fas fa-question-circle gender-question"></i>
        </div>
    )
}