//This is going to represent user reducer/state

//createSlice creates reducer in a easy way, split the logic and able to access it from differnt component, it becomes organised and easier to understand
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "rex", age: 35, email: "rex@hotmail.com" } },
    reducers: {
        //state is the current state, action payload provides new value to update in the state
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            // logout: (state, action) => {
            state.value = { name: "", age: 0, email: "" };
        }
    },
});

//exporting all actions in the userSlice
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;