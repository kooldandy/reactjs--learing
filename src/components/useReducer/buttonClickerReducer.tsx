import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state: any, action: any) => {

    if (action.type === "INC") {
        state += 1;
    }
    else if (action.type === "DEC") {
        state -= 1;
    }

    return state;
}

const ButtonClickerReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <>
        <div>
            <h1>Use Reducer hook</h1>
        </div>
        <div>
            <label>Counter: {state}</label>
            <br />
            <button onClick={() => dispatch({ type: "INC" })}> Increment</button>
            <button onClick={() => dispatch({ type: "DEC" })}> Decrement</button>
        </div>
    </>;
};

export default ButtonClickerReducer;
