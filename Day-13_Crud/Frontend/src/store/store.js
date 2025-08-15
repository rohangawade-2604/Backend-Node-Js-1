import { configureStore } from "@reduxjs/toolkit";

import  signUpFun  from "../Reducer/SignupReducer";

export const store = configureStore ({
    reducer: {
        sign: signUpFun
    }   
})