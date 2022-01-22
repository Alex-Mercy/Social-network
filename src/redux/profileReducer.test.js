import profileReducer, { addPost, deletePost } from "./profileReducer";
import React from "react";

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 2, message: "It is my first post.", likesCount: 12 }
    ]
};

it('new post should be added', () => {
    let action = addPost("krakozabra");
    let newState = profileReducer(state, action);
    
expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPost("krakozabra");
    let newState = profileReducer(state, action);
    
expect(newState.posts[2].message).toBe("krakozabra");
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it('after deleting length of message should not be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
