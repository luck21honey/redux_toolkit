import React from 'react';

const { useReducer } = React;

const initialState = [
	{
		name: "Waffles",
		breed: "Chihuahua",
		adopted: false,
  },
  {
      name: "Charlie",
      breed: "Pitbull",
      adopted: true,
  },
  {
      name: "Prince",
      breed: "German Shepherd",
      adopted: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADOPT':
      return state.map(dog => {
        if (dog.name === action.payload) dog.adopted = true;
        return dog;
      });
    case 'RETURN':
      return state.map(dog => {
        if (dog.name === action.payload) dog.adopted = false;
        return dog;
      });
    default:
      return state;
  }
}

 const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const adoptDog = name => dispatch({ type: 'ADOPT', payload: name });
  
  const returnDog = name => dispatch({ type: 'RETURN', payload: name });
  
  return (
    <>
      <h3>Adoption Dogs List</h3>
      {state.map(dog => (
        <div className="box">
          <div>Name: {dog.name}</div>
          <div>Breed: {dog.breed}</div>
          <div>Status: {dog.adopted ? "Adopted" : "Not adopted"}</div>
          {dog.adopted ? (
            <button onClick={() => returnDog(dog.name)}>Return</button>
          ) : (
            <button onClick={() => adoptDog(dog.name)}>Adopt</button>
          )}
        </div>
      ))}

    </>

    
  );
}

export default MyComponent;