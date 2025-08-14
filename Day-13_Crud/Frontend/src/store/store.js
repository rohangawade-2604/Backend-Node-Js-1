import { configureStore } from "@reduxjs/toolkit";

import  signUpFun  from "../Reducer/signin/SignupReducer";

export const store = configureStore ({
    reducer: {
        sign: signUpFun
    }   
})