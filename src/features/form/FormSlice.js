import { createSlice } from '@reduxjs/toolkit';
//import App from '../../App';
//import {form} from '..../app/store';

/* export const storeStatus = () => {
  console.log(store.getState);
}; */
export var myState = {
  value: 0,
  actual: 0,
  budget: 0,
  percentComplete: 0,
}
/* const autoState = (state = initialState) => {
  return state;
}
 */

export const formSlice = createSlice({
  name: 'form',
  initialState: myState,

  reducers: {
    calculate: (state = myState) => {
      console.log(`Percent Complete before it is calculated= ${myState.percentComplete}`);
      console.log("Calculate is fired");
      console.log(`Actual from myState=${myState.actual}`);
      console.log(`Budget from myState=${myState.budget}`);
      console.log(`Actual from state=${state.actual}`);
      console.log(`Budget from state=${state.budget}`);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.percentComplete = state.actual / state.budget;
      console.log(`Percent Complete from state= ${state.percentComplete}`);
      myState = { ...myState, percentComplete: state.percentComplete }
      console.log(`Percent Complete from myState  = ${myState.percentComplete}`);
      //console.log(state.formSlice);
    },
    handleChange: (state = myState, action) => {
      console.log("Type me please");

      //let name = action.payload.name; 
      //let value = action.payload.value;
      const { name, value } = action.payload;
      console.log("passed the let");
      state[name] = value;
      console.log("passed the state change");
      console.log(`Actual Amount = ${state.actual}`);
      console.log(`Budget Amount = ${state.budget}`);
      myState = { ...myState, ...state }
      //console.log(state[name]);
      //console.log(store.getStatus);
    },


    incrementByAmount: (state, action) => {
      state.value += action.payload.value;
    },
  },
});

export const { calculate, handleChange, incrementByAmount, state } = formSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.value;

export default formSlice.reducer;
