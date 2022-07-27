import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrementtAction, incrementAction} from './action/crud';

const CrudApp = () => {

  const dispatch = useDispatch();

  const changeNumber = useSelector((state: any) => {
    console.log('state', state);
    return state.changeNumber.value;
  });
  return (
    <div>
      <h1>CrudApp</h1>

      <div>
        <input type="button" value="Decrement" onClick={() => dispatch(decrementtAction(1))}/>
        <input type="text" readOnly value={changeNumber}/>
        <input type="button" value="Increment" onClick={() => dispatch(incrementAction(1))}/>
      </div>
    </div>
  )
}

export default CrudApp