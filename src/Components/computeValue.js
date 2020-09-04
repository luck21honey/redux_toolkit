import React from 'react';

const { useReducer } = React;

const initialState = 
	{
		actual: 0,
    budget: 0,
    percentComplete: 0,
  };

  const handleSubmit = ()=>{};
  const updateFieldValue = ()=>{};

  const formReducer = (state, action) => {
  switch (action.type) {
    case 'COMPUTE':
      
      return () =>  {
                return { ...state, [action.payload.field]: action.payload.value }
      };

    case 'MULTIPLY':
      return () =>  {
        return state.value1 * state.value2;
      };
    default:
      return state;
  }

}
 
 const ComputeValue = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  console.log(state.actual);/* For debugging - remove before final build */
  console.log(state.budget);/* For debugging - remove before final build */

  const updateFieldValue = (actual, budget) => 
  dispatch({ 
    type: 'COMPUTE', 
    payload: {
    actual, 
    budget,
    },
   })
 }
  
  return (
    <>
      <h3>Compute Values</h3>
  
        <div className="box">
          <div>First Value : {state.actual}</div>
          <div>Second Value: {state.budget}</div>
          
            <button onClick={() => calculate(state.actual, state.budget)}>Compute</button>
        </div>
        <div>

        <form /* onSubmit={handleSubmit} */>
      
      <label htmlFor="actual">
          Actual
          <div>
          <input
            id="actual"
            name="actual"
            type="number"
            placeholder="Enter Actual Cost"
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
          </div>
        </label>
        <br></br>
        
        <label htmlFor='budget'>
          Budget
         <div>
          <input
            id='budget'
            name='budget'
            type='number'
            placeholder='Enter Budget'
           onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
          </div>
        </label>
        <br></br>
        
        <label htmlFor='percentComplete'>
        Percent Complete
        <div>
          <input
            id='percentComplete'
            name='percentComplete'
            type='number'
            placeholder='Calculated Percent Complete'
            readOnly
          /*   value={state.percentComplete} */
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            
          />
          </div>
        </label>
        <br></br>
        
     </form>
        </div>

    </>

    
  );
}

export default ComputeValue;