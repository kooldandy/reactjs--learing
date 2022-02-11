import React, { createContext } from 'react';
import CompB from './CompB';

const Context = createContext('');

function CompA() {

  return (
    <Context.Provider value={"passing data from CompA"}>
      <div>
        <h1>Use Context hook</h1>
        <br/>
        Comp A

        <CompB></CompB>
      </div>
    </Context.Provider>

  );
}

export default CompA;
export {Context};