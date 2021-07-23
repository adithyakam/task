import React from 'react'
import { connect } from 'react-redux'

function Employee(props) {
const {data}=props

    return (
        <div className="employee">
         {   data.user.map(ele =>{
             return <h1>{ele.name}</h1>
            })}

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{data:state.data.data}
}

export default connect(mapStateToProps,null)(Employee)
