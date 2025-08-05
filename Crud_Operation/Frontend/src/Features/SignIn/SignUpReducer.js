import {createSlice} from "@reduxjs/toolkit";

const initialValue = {user: null};

const SignUpReducer = createSlice({
    name: "signup-slicer",
    initialState: initialValue,
    reducers: {
        signIns : (state ,action) => {
            state.user = action.payload
        }
    }
})

export const {signIns} = SignUpReducer.actions;
export default SignUpReducer.reducer;

// async Thungs...........

export const signupThunks = (FormData) => async (dispatch) => {
    try{
         const response = await fetch ("http://localhost:9000/signup", {
            method: "POST",
            body: JSON.stringify(FormData),
            headers: {
                "Content-Type":"application/json"
            }
         });

         const result = await response.text()
         console.log("API response" ,result);
         dispatch(signIns(result))
    }
    catch(err){
        console.log("API error", err)
    }
}