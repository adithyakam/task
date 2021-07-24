import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import "./Login.css"

import {loginUser} from "../../Redux/Login/login.actions"
import { useHistory } from 'react-router'

function Login(props) {

  const history=useHistory()

    const {loginUser,isLoggedIn,loginFailed}=props

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const inputChange=(e)=>{
        const {name,value} = e.target

            setUser({...user,[name]:value})
        
    }

    const onSubmitForm=(e)=>{

        e.preventDefault();
        loginUser(user)
    }

useEffect(() => {
if(isLoggedIn){
  history.push('/list')
}


})
console.log(loginFailed);
    return (
        <div className="login">
          <div className="loginContainer"> 
          <h3 className={`${(loginFailed)?'show':'hid'}`}>*login failed please check username and password</h3>
          <form onSubmit={onSubmitForm} className="login_Form" >
              <label>Username</label>
              <input type="text" name="username" onChange={inputChange} placeholder="enter username" required/>
              <label>Password</label>
              <input type="password" name="password" onChange={inputChange} placeholder="enter password" required />
            <button type="submit">submit</button>
          </form>
          </div>
         
        </div>
    )
}


const mapStateToProp=(state)=>{
  return{isLoggedIn:state.login.isLoggedIn,
    loginFailed:state.login.loginFailed
  }
}

const mapDispathToProp=(dispatch)=>{
  return { loginUser:(user)=>dispatch(loginUser(user))}
}

export default connect(mapStateToProp,mapDispathToProp)(Login)
