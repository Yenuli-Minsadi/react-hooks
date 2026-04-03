import { useReducer, useState } from "react";

// type User = {
//   id: string // R
//   name: string // R
//   email: string // R
//   age: number // R
//   address?: string // Optional
// }

interface User {
  id: string; // R
  name: string; // R
  email: string; // R
  age: number; // R
  address?: string; // Optional
}

const initialState: User = {
  id: "",
  name: "",
  email: "",
  age: 0,
};

const ACTION_TYPES = {
  SET_ID: "SET_ID",
  SET_NAME: "SET_NAME",
  SET_EMAIL: "SET_EMAIL",
  SET_AGE: "SET_AGE",
};

// state update here
// state: User - currect state
// action - action type and new data
const reducer = (state: User, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ID:
      return { ...state, id: action?.data };
    case ACTION_TYPES.SET_NAME:
      return { ...state, name: action?.data };
    case ACTION_TYPES.SET_EMAIL:
      return { ...state, email: action?.data };
    case ACTION_TYPES.SET_AGE:
      return { ...state, age: action?.data };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //  const [state, dispatch] = useReducer(reducer, {
  //   id: "",
  //   name: "",
  //   email: "",
  //   age: 0
  // })

  return (
    <div>
      <input
        value={state.id}
        onChange={(e) => {
          dispatch(
            // action
            {
              type: ACTION_TYPES.SET_ID,
              data: e.target.value,
            },
          );
        }}
        type="text"
        placeholder="ID"
      />
      <input
        value={state.name}
        onChange={(e) => {
          dispatch({
            type: ACTION_TYPES.SET_NAME,
            data: e.target.value,
          });
        }}
        type="text"
        placeholder="Name"
      />
      <input
        value={state.email}
        onChange={(e) => {
          dispatch({
            type: ACTION_TYPES.SET_EMAIL,
            data: e.target.value,
          });
        }}
        type="email"
        placeholder="Email"
      />
      <input
        value={state.age}
        onChange={(e) => {
          dispatch({
            type: ACTION_TYPES.SET_AGE,
            data: e.target.value,
          });
        }}
        type="number"
        placeholder="Age"
      />
      <hr />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default App;
