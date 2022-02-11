import React, {useContext} from 'react';
import { Context } from './CompA';

function CompC() {

  const data = useContext(Context);

  return <div>Comp C {data}</div>;
}

export default CompC;
