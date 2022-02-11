import React, { memo } from 'react';

type buttonType = {
    clickHandler: CallableFunction;
    children: any;
}


const Button = (prop: buttonType) => {
    console.log("Button", prop.children);
    const clickHandler = () =>{
       
        prop.clickHandler();
    }

  return <div>
      <button onClick={clickHandler}>{prop.children}</button>
  </div>;
};

export default memo(Button);
