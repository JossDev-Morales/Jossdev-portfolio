import { createSlice } from '@reduxjs/toolkit';

export const content = createSlice({
    name: 'content',
    initialState: {},
    reducers: {
        changeCont:(state,action)=>{
            return action.payload
        }
    }
})

export const {  changeCont} = content.actions;

export default content.reducer;
