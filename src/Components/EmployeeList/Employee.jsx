import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Card from '../Card/Card'


import "./Employee.css"

function Employee(props) {

    const history=useHistory()
const {data,isLoggedIn}=props


useEffect(() => {
    if(!isLoggedIn){
      history.push('/')
    }
})
    


    return (
        <div className="employee">
            <h4>Data</h4>
            <div className="employee__container">
            {   data.user.map(ele =>{
            return <Card key={ele.id} ele={ele}/>
            })}
            </div>
            
         

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{data:state.data.data,isLoggedIn:state.login.isLoggedIn}
}

export default connect(mapStateToProps,null)(Employee)
