import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice";
import themeReducer from './theme/themeSlice'
import languageReducer from "./language/languageSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme:themeReducer, 
        language: languageReducer

    }
})