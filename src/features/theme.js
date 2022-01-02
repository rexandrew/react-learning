//This is going to represent user reducer/state

//createSlice creates reducer in a easy way, split the logic and able to access it from differnt component, it becomes organised and easier to understand
import { createSlice } from '@reduxjs/toolkit';



const initialStateValue = "";
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        //state is the current state, action payload provides new value to update in the state
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    },
});

//exporting all actions in the userSlice
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;