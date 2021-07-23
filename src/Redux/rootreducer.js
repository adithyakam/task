import loginReducer from "./Login/login.reducer"
import { combineReducers } from "redux";
import employeeDataReducer from "./Employeedata/employeeData.reducer"



const rootReducer =combineReducers({
    login:loginReducer,
    data:employeeDataReducer
  
})

export default rootReducer