import React from 'react'
import {LOGIN} from './login.types'
import { loginUserUtil } from './login.util'



const initialState={
    user:null,
    isLoggedIn:false
}


function loginReducer(state=initialState,action) {
    switch (action.type) {
        case LOGIN:return loginUserUtil(action.payload)
            
    
        default:return state
    }
}

export default loginReducer