import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     profilePage={props.profilePage.newPostText}
            />
        </div>

    )
}

export default Profile