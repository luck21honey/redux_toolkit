import React from 'react';
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'

const addTodo = todo => {
    dispatch({
      type: ADD_TODO,
      payload: {
        todo,
        completed: false,
        id: id()
      }
    });
  };
  
  // creates an action with a type property of DELETE_TODO,
  // and accepts an id which is the only property in our payload. 
  const deleteTodo = id => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id
      }
    });
  };
  
  // creates an action with a type property of TOGGLE_COMPLETED,
  // and accepts an id which is the only property in our payload. 
  const completeTodo = id => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: {
        id
      }
    });
  };