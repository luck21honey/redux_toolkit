import React from 'react';
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculate,
  handleChange,
  myState,
} from './FormSlice';

import styles from './Form.module.css';

export function Form() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  useSelector(state => state.form);
    // const [incrementAmount, setIncrementAmount] = useState('2');
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("It worked!!!");
    dispatch(calculate());
  }

  const updatePercentComplete = (state = myState) => {
    console.log("updatePercentComplete fired");
    console.log(state.percentComplete);
    return state.percentComplete
  }

  return (
    <>
      <div>
        <h4>the new percent complete is {updatePercentComplete()}</h4>
        <h4>the actual is {myState.actual}</h4>
        <h4>the new budget is {myState.budget}</h4>
      </div>

      <div className={styles.row}>

        <fieldset>
          <form onSubmit={e => handleOnSubmit(e)}>
            Actual <input type="number" name="actual" onChange={e => dispatch(handleChange({ name: e.target.name, value: e.target.value }))} />
            <br /><br />
          Budget <input type="number" name="budget" onChange={e => dispatch(handleChange({ name: e.target.name, value: e.target.value }))} />
            <br /><br />
          Percent Complete
          <br />
            <input type="number" name="percentComplete" value={updatePercentComplete()} readOnly></input>
            <br />
            <br />
            <input type="submit" name="submit" value="Calculate" align="center" />

          </form>
        </fieldset>
      </div>
    </>
  );

}

