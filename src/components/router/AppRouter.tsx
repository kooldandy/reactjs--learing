import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetUser from './../useEffects/getUser';
import UnControlled from './../useRef/unControlled';
import ButtonClicker from './../useState/buttonClicker';
import ButtonClickerReducer from './../useReducer/buttonClickerReducer';
import CompA from './../useContext/CompA';
import MemoizeValue from './../useMemo/memoizeValue';
import UseCallbackExample from './../useCallback/useCallbackExample';
import MobxExample from '../stateManagement/MobxExample';
import { TodoStore } from '../stateManagement/TodoStore';

const AppRouter = () => {
  return <>
    <Routes>
      {/* <Route path="/" element={<AppLayout />}></Route> */}
      <Route index element={<ButtonClicker />} />
      <Route path="/usestate" element={<ButtonClicker />}></Route>
      <Route path="/useeffets" element={<GetUser />}></Route>
      <Route path="/usecontext" element={<CompA />}></Route>
      <Route path="/useref" element={<UnControlled />}></Route>
      <Route path="/usereducer" element={<ButtonClickerReducer />}></Route>
      <Route path="/usememo" element={<MemoizeValue />}></Route>
      <Route path="/usecallback" element={<UseCallbackExample />}></Route>
      <Route path="/mobx" element={<MobxExample todoStore={TodoStore}/>}></Route>
    </Routes> 
  </>;
};

export default AppRouter;
