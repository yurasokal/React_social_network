import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
    <div>
    <div>
      <img src='https://img.112.international/original/2015/08/22/178581.jpg' alt='Lviv background logo' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
    </div>
    );
}

export default Profile;