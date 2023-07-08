import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "light",
        backgroundTheme: "light",
        textTheme: "dark"
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

// export actions
export const { toggleTheme } = themeSlice.actions;

// export reducer
export default themeSlice.reducer;