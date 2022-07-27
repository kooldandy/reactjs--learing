export const incrementAction = (value: number) => {
    return {
      type: "INCREMENT",
      payload: value,
    };
  };
  
  export const decrementtAction = (value: number) => {
    return {
      type: "DECREMENT",
      payload: value,
    };
  };