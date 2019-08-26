import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/user_actions'
import {withRouter} from 'react-router-dom';

class MultiplePicsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: null,
            urls: []
        }
    }

    handleFiles(e) {
        e.preventDefault();
        e.stopPropagation();
        const files = e.currentTarget.files;
        this.setState({photos: files})

        
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    const newUrls = this.state.urls;
                    newUrls.push(fileReader.result);
                    this.setState({ urls: newUrls })
                }
                fileReader.readAsDataURL(files[i]);
            }
        }
    }

    submit(e) {
        e.preventDefault();
        if (this.state.urls === null || this.state.photos.length === 0) {
            return;
        }
        const formData = new FormData();
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('user[photos][]', this.state.photos[i]);
        }
        this.props.updateUser(this.props.currentUserId, formData).then(() => {
            this.setState({ photos: null, urls: [] })
            this.props.closeModal();
            this.props.history.push(`/user/${this.props.currentUserId}/photos`)
        });
        

    }

    upload(e) {
        e.stopPropagation();
        this.refs.photoUpload.click();

        setTimeout(() => {
            this.refs.button.classList.remove("picture-modal-display");
            this.refs.buttons.classList.add("picture-modal-display");
        }, 200)
    }

    render() {
        const images = this.state.urls.map( (url, idx) => {
            return <div key={`pic-${idx}`} className="upload-photos-item"><img src={url} alt="" /></div>
        });

        return (
            <div className="picture-modal picture-modal-multiple">
                <h1>Upload Pictures</h1>
                <button ref="button" className="picture-modal-display" onClick={this.upload.bind(this)}>+ Upload Photos</button>
                <div className="picture-modal-multiple-index">
                    {images}
                </div>
                <input ref="photoUpload" onChange={this.handleFiles.bind(this)} className="photo-upload" type="file" multiple/>
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

export default withRouter(connect(msp, mdp)(MultiplePicsModal));