import React, { useReducer } from 'react'

// form status variables
const IDLE = 'UPDATE_FIELD_VALUE'
const PENDING = 'PENDING'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

// initial state values
const INITIAL_STATE = {
  name: 'Bashir ',
  email: 'b@y.com',
  subject: 'nothing',
  body: 'bidy',
  status: IDLE,
  age: 32,
}

// action types
const UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE'
const UPDATE_STATUS = 'UPDATE_STATUS'
const RESET = 'RESET'

// 3rd parameter for lazy initialization
const init = initialState => initialState

// reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case  UPDATE_FIELD_VALUE:
      return { ...state, [action.payload.field]: action.payload.value }
    case UPDATE_STATUS:
      return { ...state, status: action.payload.status }
    case RESET:
      return init(INITIAL_STATE)
    default:
      return INITIAL_STATE
      
  }
  
} 

// Form component
const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE, init)
  console.log(state.age);
  // action creators
  const updateFieldValue = (field, value) => {
    dispatch({
      type: UPDATE_FIELD_VALUE,
      payload: {
        field,
        value,
      },
    })
  } 

  const updateStatus = status => {
    dispatch({
      type: UPDATE_STATUS,
      payload: {
        status,
      },
    })
  }

  const resetForm = () => {
    dispatch({ type: RESET })
  }

  // MOCK submit handler
  const handleSubmit = event => {
    event.preventDefault()
    updateStatus(PENDING) 

    setTimeout(()  =>  {
      updateStatus(SUCCESS)
    },  2000)
  } 

  // Success state UI
  if (state.status === SUCCESS)  {
    return (
      <>
        <p>Your message was sent successfully.</p>
         <h4> Name: {state.age *2  }</h4>

        <button type='button' onClick={resetForm}>
          Send Another Message
        </button>
      </>
    )
  }  

  // Error state UI
  if (state.status === ERROR)  {
    return (
      <>
        <p>Something went wrong...</p>
        <button type='button' onClick={resetForm}>
          Try Again
        </button>
      </>
    )
  } 

  // Default state UI
  return (
    <>
      <h1>Send a Message</h1>
      <form onSubmit={handleSubmit}>
      
      <label htmlFor='age'>
          Age
          <input
            id='age'
            name='age'
            type='number'
            value={state.age}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
        </label>
        
        <label htmlFor='name'>
          Name
          <input
            id='name'
            name='name'
            type='text'
            value={state.name}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
        </label>
        <label htmlFor='email'>
          Email
          <input
            id='email'
            name='email'
            type='email'
            value={state.email}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
        </label>
        <label htmlFor='subject'>
          Subject
          <input
            id='subject'
            name='subject'
            type='text'
            value={state.subject}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
          />
        </label>
        <label htmlFor='body'>
          Body
          <textarea
            id='body'
            name='body'
            type='text'
            value={state.body}
            onChange={e => updateFieldValue(e.target.name, e.target.value)}
            required
          />
        </label>
        <button type='submit' disabled={state.status === PENDING}>
          {state.status !== PENDING ? 'Send' : 'Sending...'}
        </button>
      </form>
    </>
  )
}

export  default  Form