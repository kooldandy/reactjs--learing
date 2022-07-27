import { AnyAction } from "redux";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const changeNumber = (state = initialState, action: AnyAction) => {
  const type = action.type;

  switch (type) {
    case "INCREMENT":
      state = { ...state, value: state.value + action.payload };
      break;
    case "DECREMENT":
      state = { ...state, value: state.value - action.payload };
      break;
  }

  return state;
};

export default changeNumber;
