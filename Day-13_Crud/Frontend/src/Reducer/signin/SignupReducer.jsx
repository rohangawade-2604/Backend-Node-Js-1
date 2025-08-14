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


export const signUpThunk = (formData) => async (dispatch) => {
    try{
        const response = await fetch("http://localhost:8500/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "content-Type": "application/json"
            },
        });

        const result = await response.json();
        console.log("ApI response", result);
        dispatch(signIns(result));

        if(result.success){
            alert(result.message);
        }
    }
    catch(err){
            console.log("API error", err);
        }
};
