import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0)
  return (
    <div id="main">
        <span id="counter">{state}</span>
    <button id="increment-btn" onClick={e=>{
      dispatch({type:'increase'})
    }>Increase</button>
    <button id="decrement-btn" onClick={e=>{
      dispatch({type:'decrease'})
    }>Decrease</button>
    </div>
  )
}


export default App;
