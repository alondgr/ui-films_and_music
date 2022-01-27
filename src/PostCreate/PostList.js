import React, { useState } from 'react';
import Post from './Post';
import PostCreate from './PostCreate';

export default function PostList() {

    const [posts, setPosts] = useState([]);

    function onAdd(post) {
        setPosts([...posts, post]);
    }



    return (
        <div>
            <PostCreate onAdd={onAdd} />
            <ul>
                {posts.map((post, index) => (
                    <Post key={index} id={index}>{post}</Post>
                ))}
            </ul>
        </div>
    )
}
