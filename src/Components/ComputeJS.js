import React from 'react';

 
const handleSubmit = (actual, budget)  => {
    
    
}

const updateFieldValue = (field, value) => {
    if(field ==='actual') {
        let actual = field.value;
    
    let budget = field.value;
    console.log(`actual =  ${actual}  budget = ${budget} `);
    
    const percentComplete = actual/budget;

    console.log({percentComplete});
}
}
const ComputeJS = () => {
   
  return (
    <>
      <h3>Compute Percent Compute</h3>
  
    <div>

    <form onSubmit={handleSubmit()} >
      
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
        <button type='submit'>
          Compute Percent Complete
        </button>

     </form>
        </div>

    </>

    
  );
  }
export default ComputeJS;