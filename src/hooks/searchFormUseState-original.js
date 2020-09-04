import React, { useState } from 'react';

function App() {

  let [account, setAccount] = useState({
    username: '',
    password: '',
    description: ''
  });

  let search = (e) => {
    e.preventDefault();
    let keyword = e.target.elements.keyword.value;
    console.log('Keyword: ' + keyword);
  }

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  }

  let save = (e) => {
    e.preventDefault();
    console.log(account);
  }

  return (
    <div>

      <fieldset>
        <legend>Demo 1</legend>
        <form method="post" onSubmit={search}>
          <input type="text" name="keyword" placeholder="Input keyword..." />
          <input type="submit" value="Search" />
        </form>
      </fieldset>

      <fieldset>
        <legend>Demo 2</legend>
        <form method="post" onSubmit={save}>
          Username <input type="text" name="username" onChange={handleChange} />
          <br />
          Password <input type="password" name="password" onChange={handleChange} />
          <br />
          Description
          <br />
          <textarea name="description" cols="20" rows="5" onChange={handleChange}></textarea>
          <br />
          <input type="submit" value="Save" />
        </form>
      </fieldset>

    </div>
  );
};

export default App;