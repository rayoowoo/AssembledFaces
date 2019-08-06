import React from 'react'

class ProfilePictureArea extends React.Component {
    constructor(props) {
        super(props)
    }
    // componenDidMount() {
    //     this.refs.jump.scrollIntoView();
    // }

    updatePicture(field) {

    }

    render() {
        const {user} = this.props;
        const photo = user.photoUrl ? <img src={user.photoUrl} alt="" /> : null
        const cover = user.coverUrl ? <img src={user.coverUrl} alt="" /> : null
        return (
            <>
                <section className="profile-picture-area">
                    <div className="profile-picture-blur">
                    </div>
                    <div className="profile-cover-picture">
                        <button onClick={this.props.openCover} className="profile-cover-picture-update"><i className="fa fa-camera"></i>Update Cover Photo</button>
                        {cover}
                    {/*  */}
                    </div>
                    <div className="profile-main-picture" ref="main">
                        <div>
                            <button onClick={this.props.openProfile} className="profile-main-picture-update"><i className="fa fa-camera"></i><p>Update</p></button>
                            {photo}
                        </div>
                   

                    </div>
                    <h1 className="profile-name">{user.first_name} {user.last_name}</h1>
                    <button onClick={e=> alert("not implemented yet")}className="profile-btn profile-btn-info">Update Info</button>
                    <button className="profile-btn profile-btn-friend">Friend Status</button>
                </section>
            </>

        )
    }
}

export default ProfilePictureArea;

// pictures FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.
// FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.