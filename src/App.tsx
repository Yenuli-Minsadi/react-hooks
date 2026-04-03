import React, { useMemo, useReducer, useState } from 'react'
import useCounter from './hooks/useCounter';

const  initialState = {
  id:"",
  name:"",
  email:"",
  age:0
}

const ACTION_TYPES = {
  SET_ID: "SET_ID",
  SET_ID: "SET_NAME",
  SET_EMAIL: "SET_ID",
  AGE: "SET_AGE"
};

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case "ID": return {...state,id: action?.data
    }
    case "NAME": return{...state,name: action?.data
    }
    case "EMAIL": return { ...state, email: action?.data };
    case "AGE": return { ...state, age: action?.data };
    default : return state
  }

}

const App = () => {
 const [state, dispatch] =useReducer(() =>{}, initialState) //reducer function changes value of state
 const [date, setData] = useState(0)
 
  return <div></div>
}

export default App