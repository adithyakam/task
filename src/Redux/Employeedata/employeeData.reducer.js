import React from 'react'
import { DATA } from './data'
import { CHANGEDATA } from './employeeData.type'

const initialState={
    data:DATA
}


function employeeDataReducer(state=initialState,action) {
   switch (action.type) {
       default:return state
   }
}

export default employeeDataReducer
