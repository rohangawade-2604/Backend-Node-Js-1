import {ConfigueStore} from ('@reduxjs/toolkit')


export const store = ConfigueStore({
    reducer: {
        login: loginFun

    }   
})