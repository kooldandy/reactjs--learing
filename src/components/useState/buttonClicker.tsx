import React, { useState } from 'react';

const ButtonClicker = () => {

    const [count, setCount] = useState(0);

    const setCounter = (value: number) => {
        setCount(value);
    }

    return <>
    <div>
        <h1>Use State hook</h1>
    </div>
    <div>
        <label>Counter: {count}</label>
        <br/>
        <button onClick={() => setCounter(count + 1)}> Increment</button>
        <button onClick={() => setCounter(count - 1)}> Decrement</button>
    </div>
    </>;
};

export default ButtonClicker;
