import React from "react";

const UnControlled = () => {
  const [counter, setCounter] = React.useState(0);

  const createRef: any = React.createRef();
  const useRef = React.useRef('');

  React.useEffect(() => {
      useRef.current = "Use ref";
      createRef.current = "Create ref";
  }, [counter]);

  React.useEffect(() => {
    console.log(useRef.current, counter);
    console.log(createRef.current, counter);
}, [useRef, createRef,counter]);

  return (
    <div>
      <h1> React UnControlled Forms</h1>
      <div >
        <div>
          {/* <label htmlFor="name">Enter Name: </label>
          <input type="text" id="name" ref={name} /> */}
          <p>Counter: {counter}</p>
          <p>Use ref: {useRef.current}</p>
          <p>createRef: {createRef.current}</p>
        </div>

        <div>
          <button onClick={() => setCounter((c) =>c+1 )}> Counter</button>
        </div>
      </div>
    </div>
  );
};

export default UnControlled;
