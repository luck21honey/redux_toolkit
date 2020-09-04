import React, { useReducer } from 'react';
import reducer from "./reducer";

const initialState = { 
  "actual": '',
  "budget": '',
  "percentComplete": ''
  }

function FormUseReducer() {

  let [state, dispatch] = useReducer(reducer, initialState);

  let handleChange = (e) => {
    console.log(e.target.name);
    
    dispatch({
      type: "UPDATE_VALUES",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    })
  }
  let handleSubmit = (e) => {
    let calculetePercentComplete = state.actual / state.budget;
    e.preventDefault();  
    dispatch({  
        type: "CALCULATE",
        payload: calculetePercentComplete,
      })
  }


  return (
    <div>
      <h5>the new percent complete is {state.percentComplete}</h5>
      <h5>the actual is {state.actual}</h5>
      <h5>the new budget is {state.budget}</h5>


      <fieldset>
      <form onSubmit={handleSubmit}>
         Actual <input type="number" name="actual"  onChange= {handleChange}/* {e => handleChange(e.target.name, e.target.value)} */ />
          <br /><br />
          Budget <input type="number" name="budget"  onChange={handleChange} />
          <br /><br />
          Percent Complete
          <br />
          <input type="number"  name="percentComplete"  value ={state.percentComplete} readOnly></input>
          <br />
          <br />
          <input type="submit" name="submit" value="Calculate" align="center" />
        </form>
      </fieldset>

    </div>
  
  );
  
};

export default FormUseReducer; 