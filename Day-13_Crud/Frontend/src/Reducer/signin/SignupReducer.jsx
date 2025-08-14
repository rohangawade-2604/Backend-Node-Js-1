import { createSlice } from "@reduxjs/toolkit";

const initialValue = { user: null};

const signUpReducer = createSlice({
    name: "SignUp-slicer",
    initialState: initialValue,
    reducers: {
        signIns: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { signIns } = signUpReducer.actions;
export default signUpReducer.reducer;


