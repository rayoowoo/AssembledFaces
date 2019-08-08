import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../actions/user_actions'

class PicModal extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            photo: null,
            url: ""
        }
    }

    handleFile(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photo: file, url: fileReader.result })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    submit(e) {
        e.preventDefault();
        if (this.state.url === "" || this.state.photo === null ) {
            return;
        }
        const formData = new FormData();
        
        let type;
        switch (this.props.type) {
            case "Profile":
                type = "profile_photo";
                break;
            case "Cover":
                type = "cover_photo";
                break;
            default:
                type = "photos";
            }
                    
        formData.append(`user[${type}]`, this.state.photo)
        this.props.updateUser(this.props.currentUserId, formData);
        this.setState({ body: "", photo: null, url: "" })
        this.props.closeModal();

    }

    upload(e) {
        e.stopPropagation();
        this.refs.photoUpload.click();
       
        setTimeout( () => {
            this.refs.button.classList.remove("picture-modal-display");
            this.refs.buttons.classList.add("picture-modal-display");
        }, 200)
    }

    render() {
        let type;
        switch(this.props.type) {
            case "Profile":
                type = " Profile ";
                break;
            case "Cover":
                type = " Cover ";
                break;
            default:
                type = " ";
        }
        return (
            <div className="picture-modal">
                <h1>Update{type}Picture</h1>
                <button ref="button" className="picture-modal-display" onClick={this.upload.bind(this)}>+ Upload Photo</button>
                <img src={this.state.url} alt=""/>
                <input ref="photoUpload" onChange={this.handleFile.bind(this)} className="photo-upload" type="file" />
                <section ref="buttons">
                    <button onClick={this.submit.bind(this)}>Submit</button>
                    <button onClick={this.props.closeModal}>Cancel</button>
                </section>
            </div>
            
        )
    }
}

const msp = state => ({
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
})

export default connect(msp, mdp)(PicModal)