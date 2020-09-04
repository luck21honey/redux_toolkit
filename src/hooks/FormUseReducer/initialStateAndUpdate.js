import {useReducer} from 'react';
import reducer from './reducer';

function InitialStateAndUpdate() {

const initialState = { 
  "actual": '',
  "budget": '',
  "percentComplete": ''
  }


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
    };
    export default InitialStateAndUpdate;