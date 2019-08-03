import React from 'react'

class ProfilePictureArea extends React.Component {

    componenDidMount() {
        this.refs.main.scrollTop += 100;
    }

    render() {
        const {user} = this.props;
        return (
            <>
                <section className="profile-picture-area">
                    <div className="profile-picture-blur">
                    </div>
                    <div className="profile-cover-picture">
                        <img src="https://1000logos.net/wp-content/uploads/2018/02/Iron-Man-logo.jpg" alt=""/>
                    {/* FROM 1000logos.net/iron-man-logo. All rights go to Marvel Studios. */}
                    </div>
                    <div className="profile-main-picture" ref="main">
                        <div>
                            <img src={`https://fsmedia.imgix.net/32/97/14/c9/033f/4ac9/a023/bbdc07fe72a0/avengers-endgame-iron-man-death-scene.png?rect=0%2C0%2C972%2C487&auto=format%2Ccompress&w=650`} alt=""/>
                        </div>
                    {/* FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios. */}

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