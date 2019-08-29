import React from 'react';
import {updateUser} from '../../actions/user_actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

class ProfileAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.update = this.update.bind(this);
    }

    assignSelect(e) {
        Object.values(this.refs).forEach (ref => ref.classList.remove("profile-about-selected", "profile-about-display"))
        e.target.classList.add("profile-about-selected")
        switch (e.target) {
            case this.refs.overview:
                this.refs.overview2.classList.add("profile-about-display")
                break;
            case this.refs.work:
                this.refs.work2.classList.add("profile-about-display")
                break;
            case this.refs.places:
                this.refs.places2.classList.add("profile-about-display")
                break;
            case this.refs.edit:
                this.refs.edit2.classList.add("profile-about-display")
                break;
            default:
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        let newKey;
        for (let key in this.state) {
            newKey = key;
            if (key === "firstName") {
                key = "first_name";
            } if (key === "lastName") {
                key = "last_name";
            } if (key === "currentCity") {
                key = "current_city"
            } if (key === "birthDate") {
                key === "birth_date";
            }
            formData.append(`user[${key}]`, this.state[newKey])
        }
        this.props.updateUser(this.props.currentUserId, formData).then(() => {
            this.props.history.push(`/user/${this.props.currentUserId}`)
        })
    }

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        
        const {id, workplace, education, currentCity, hometown, birthDate, createdAt} = this.props.user;

        const fullDate = birthDate.split("-").map( el => parseInt(el))
        const year = fullDate[0]
        const month = ["January", "February", "March", "Aprl", "May", "June", "July", "August", "September", "October", "November", "December"][fullDate[1]];
        const date = fullDate[2];
        const formattedBirthDate = month + " " + date.toString() + ", " + year.toString();

        let editbtn = null;
        if (id === this.props.currentUserId) {
            editbtn = <li ref="edit" onClick={this.assignSelect.bind(this)} >Edit</li>
        }
        return (
            <div className="profile-about">
                <span><i className="fas fa-user"></i>About</span>
                <section className="profile-about-main">
                    <ul className="profile-about-menu">
                        <li ref="overview" onClick={this.assignSelect.bind(this)} className="profile-about-selected">Overview</li>
                        <li ref="work" onClick={this.assignSelect.bind(this)} >Work and Education</li>
                        <li ref="places" onClick={this.assignSelect.bind(this)} >Places You've Lived</li>
                        {editbtn}
                    </ul>
                    <div className="profile-about-content">
                        <section ref="overview2" className="profile-about-overview profile-about-display">
                            <p>Joined AssembledFaces on <strong>{createdAt.date}</strong></p>
                            <p>Studied at <strong>{education}</strong></p>
                            <p>Lives in <strong>{currentCity}</strong></p>
                            <p>Born on <strong>{formattedBirthDate}</strong></p>
                        </section>
                        <section ref="work2">
                            <p>Currently works at <strong>{workplace}</strong></p>
                            <p>Studied at <strong>{education}</strong></p>
                        </section>
                        <section ref="places2">
                            <p>Currently lives in <strong>{currentCity}</strong></p>
                            <p>From <strong>{hometown}</strong></p>
                        </section>
                        <section ref="edit2">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <label>Email</label>
                                    <input onChange={this.update("email")} type="email" value={this.state.email}/>
                                <label>First Name</label>
                                    <input onChange={this.update("firstName")} type="text" value={this.state.firstName}/>
                                <label>Last Name</label>
                                    <input onChange={this.update("lastName")} type="text" value={this.state.lastName}/>
                                <label>Workplace</label>
                                    <input onChange={this.update("workplace")} type="text" value={this.state.workplace}/>
                                <label>Education</label>
                                    <input onChange={this.update("education")} type="text" value={this.state.education}/>
                                <label>Current City</label>
                                    <input onChange={this.update("currentCity")} type="text" value={this.state.currentCity}/>
                                <label>Hometown</label>
                                    <input onChange={this.update("hometown")} type="text" value={this.state.hometown}/>
                                <label>Bio</label>
                                    <textarea onChange={this.update("bio")} value={this.state.bio}></textarea>
                                <button className="signup-submit-btn">Update User Information</button>
                            </form>
                        </section>
                    </div>
                </section>

                
            </div>
        )
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    updateUser: (id, formData) => dispatch(updateUser(id, formData))
})

export default withRouter(connect(msp, mdp)(ProfileAbout))