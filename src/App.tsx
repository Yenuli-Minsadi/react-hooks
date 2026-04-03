import React, { useMemo, useReducer, useState } from 'react'
import useCounter from './hooks/useCounter';

interface User {
  id: string
  name: string
  email: string
  age: number
  address?: string
  
}

const  initialState = {
  id:"",
  name:"",
  email:"",
  age:0
}

const ACTION_TYPES = {
  SET_ID: "SET_ID",
  SET_NAME: "SET_NAME",
  SET_EMAIL: "SET_EMAIL",
  AGE: "SET_AGE"
};

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ID:
      return { ...state, id: action?.data };
    case ACTION_TYPES.SET_NAME:
      return { ...state, name: action?.data };
    case "EMAIL":
      ACTION_TYPES.SET_EMAIL:
      return { ...state, email: action?.data };
    case "AGE":
      return { ...state, age: action?.data };
      ACTION_TYPES.SET_AGE:
    default:
      return state;
  }

}

const App = () => {
 
  return <div>
    <input/>

  </div>
}

export default App