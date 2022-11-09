import React from "react";
import Post from './Post/Post'
import UseStyles from './styles';

const posts = () => {
    const classes = UseStyles();
    return (
        <>
        <h1>Post</h1>
        <Post />
        <Post />
        </>
    );
}
 export default posts;