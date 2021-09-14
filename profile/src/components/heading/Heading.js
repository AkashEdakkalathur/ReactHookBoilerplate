import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { SET_COUNTER } from '../../constants/actionConstant'

const Heading = ()=> {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const counterStore = useSelector(state => state.countList);
  const clickHandler = ()=>{
    setCount(count + 1);
    dispatch({
        type: SET_COUNTER,
        payload:count+1
    });
  }
console.log(counterStore,"counterStore")
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => clickHandler()}>
        Click me
      </button>
      {counterStore}
    </div>
  );
}
export default Heading;