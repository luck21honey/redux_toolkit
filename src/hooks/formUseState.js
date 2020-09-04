import React, { useState } from 'react';

function FormUseState() {

  
  let [account, setAccount] = useState({
    "username": '',
    "password": '',
    "description": ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
 
  }

 
  const handleSubmit = (event) => {
    console.log(event.target[2]);
    event.preventDefault();
    let calculatePercentComplete = account.username / account.password;
    console.log(calculatePercentComplete);
    setAccount((prevState) => ({

       ...prevState,
              /*  [event.target.name] // for some reason the description inout field in not availabel onsubmit*/ 
      description: calculatePercentComplete
   })
    );

    console.log(calculatePercentComplete);
    console.log(account.description * 2);
    console.log([event.target.name]);
}


  return (
    <div>
      <h4>the new percent complete is {account.description}</h4>
      <h4>the actual is {account.username}</h4>
      <h4>the new budget is {account.password}</h4>


      <fieldset>
      <form onSubmit={handleSubmit}>
         Actual <input type="number" name="username"  onChange={handleChange} />
          <br /><br />
          Budget <input type="number" name="password"  onChange={handleChange} />
          <br /><br />
          Percent Complete
          <br />
          <input type="number"  name="description"  value ={account.description} onChange={handleChange}></input>
          <br />
          <br />
          <input type="submit" name="submit" value="Calculate" align="center" />
        </form>
      </fieldset>

    </div>
  
  );
  
};

export default FormUseState; 