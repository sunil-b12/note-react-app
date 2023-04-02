import { createSlice } from "@reduxjs/toolkit";
import {curdLocal, getData} from "./local"



const  initialState = {
    post: getData(),
    isOpen: false
};


export const postSlice = createSlice({
    name:'post',
    initialState,
    reducers: {
        addPost: (state, action) => {
        state.post.push(action.payload);
        state.isOpen = false;
        curdLocal(state.post);
        },
        removePost: (state, action) => {
            state.post.splice(action.payload, 1);
            curdLocal(state.post);
          },
          updatePost: (state, action) => {
            state.post = state.post.map((user) => {
              return user.id === action.payload.id ? action.payload : user;

            });
            curdLocal(state.post);
          },
          toggle: (state, action) =>{
            state.isOpen = !state.isOpen

          }
    }
})

export const { addPost, removePost, updatePost,toggle } = postSlice.actions;
export default postSlice.reducer;