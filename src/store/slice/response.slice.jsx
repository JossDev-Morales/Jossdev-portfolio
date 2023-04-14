import { createSlice } from '@reduxjs/toolkit';

export const response = createSlice({
    name: 'response',
    initialState: {},
    reducers: {
        changeRes:(state,Return)=>{
           return Return.payload
        }
    }
})

export const {  changeRes} = response.actions;

export default response.reducer;

