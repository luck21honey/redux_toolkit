import React from 'react';
//import {} from './TestState';

const initialState = [{count: 0,
Id: 20
},
{count: 8,
  Id: 20
  }
];


function CounterUsingReducer(){
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
      
     <>
         <h3>{state.map(x => x.Id)}</h3>
        <h4> Total Count: {state.map(x => x.count)}</h4><br/>
        <h4> ID:  {state.map(x =>x.Id)}</h4><br/>
    
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'decrement'})}> - </button>
        <button onClick={() => dispatch({type: 'increment'})}> + </button>
      </>
    );
  }
  function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return {...state};
        case 'increment':
            return {count: state.count + 1,
            Id: state.Id + 1 };
        case 'decrement' :
            return {count: state.count -1,
                Id: state.Id -1 };
        default :
            throw new Error(); 
    }
  }
  export default CounterUsingReducer;