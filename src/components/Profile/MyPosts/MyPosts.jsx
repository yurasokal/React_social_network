import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        {id: 1, name: 'Hey, how are you?', likesCount: 12},
        {id: 2, name: "It's my first post!", likesCount: 11},
        {id: 3, name: 'Bla bla', likesCount: 12},
        {id: 4, name: "It's my not a first post!", likesCount: 11}
    ]

    let postsElements =
        posts.map (p => <Post message={p.name} likesCount={p.likesCount}/>);


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;