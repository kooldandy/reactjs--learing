import React, { useState, useMemo } from "react";

const MemoizeValue = () => {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  const isOkayMemo = useMemo(()=>{
      console.log('isOkay checking...');
       return count > 5;
  }, [count]);

  // const isOkayMemo = () => {
  //   console.log("isOkay checking...");
  //   return count > 5;
  // };

  return (
    <div>
      <h1>Use Memo hook</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click 1 - {count}
        </button>
        <span>IsOkay - {isOkayMemo ? "Okay" : "Not okay"}</span>
        <br />
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          Click 2 - {count2}
        </button>
      </div>
    </div>
  );
};

export default MemoizeValue;
