import React from 'react'

class ProfilePictureArea extends React.Component {

    render() {
        return (
            <>
                <section className="profile-picture-area">
                    <div className="profile-cover-picture">
                        <h1>cover picture</h1>
                    </div>
                    <div className="profile-main-picture">
                        <h1>profile pic</h1>
                    </div>
                    <h1>firstname lastname</h1>
                    <button>Update Info</button>
                    <button>Friend Status</button>
                </section>
            </>

        )
    }
}

export default ProfilePictureArea;