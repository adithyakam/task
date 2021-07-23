import React, { useState } from 'react'
import { connect } from 'react-redux'

import "./Login.css"

import {loginUser} from "../../Redux/Login/login.actions"

function Login(props) {

    const {loginUser}=props

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

    return (
        <div className="login">
          <form onSubmit={onSubmitForm}>
              <label>Username</label>
              <input type="text" name="username" onChange={inputChange} placeholder="enter username" />
              <label>Password</label>
              <input type="password" name="password" onChange={inputChange} placeholder="enter password" />
            <button>submit</button>
          </form>
        </div>
    )
}

const mapDispathToProp=(dispatch)=>{
  return { loginUser:(user)=>dispatch(loginUser(user))}
}

export default connect(null,mapDispathToProp)(Login)
