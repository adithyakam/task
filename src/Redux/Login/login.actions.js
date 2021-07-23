import {LOGIN} from './login.types'

export const loginUser=(payload)=>{
    return{
        type:LOGIN,
        payload:payload
    }
}