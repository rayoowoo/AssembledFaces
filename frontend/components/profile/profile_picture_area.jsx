import React from 'react'

class ProfilePictureArea extends React.Component {

    render() {
        return (
            <>
                <section className="profile-picture-area">
                    <div className="profile-picture-blur"></div>
                    <div className="profile-cover-picture">
                        <h1>cover picture</h1>
                    </div>
                    <div className="profile-main-picture">
                        <h1>profile pic</h1>
                    </div>
                    <h1 className="profile-name">firstname lastname</h1>
                    <button onClick={e=> alert("not implemented yet")}className="profile-btn profile-btn-info">Update Info</button>
                    <button className="profile-btn profile-btn-friend">Friend Status</button>
                </section>
            </>

        )
    }
}

export default ProfilePictureArea;