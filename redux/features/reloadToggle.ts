import {createSlice} from "@reduxjs/toolkit";

type initialStateType={
value:boolean,
}

const initialState:initialStateType={
    value:false,
}

export const toggle=createSlice({
    name:"toggle",
    initialState,
    reducers:{
        counter:(state)=>{
            state.value=!state.value;
        }
    }
});

export const {counter} =toggle.actions;
export default toggle.reducer;
