import { createSlice } from "@reduxjs/toolkit";

const languageSlice= createSlice({
    name:"language",
    initialState:{
        language:"tr"
    },
    reducers:{
        toggleLanguage:(state,action)=>{
            state.language = action.payload;
        }
    }
})

export const{toggleLanguage} = languageSlice.actions;

export default languageSlice.reducer;