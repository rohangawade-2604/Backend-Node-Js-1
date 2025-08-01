import {ConfigueStore} from '@reduxjs/toolkit'

import signupFun from '../Features/SignIn/SignUpReducer'   // taken different name of SignupReducer as signupFun from the feature folder

export const store = ConfigueStore({
    reducer: {
        sign: signupFun

    }   
})