// import * as React from 'react';

const list = [ 
  {
    title: 'React', 
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4, 
    objectID: 0
       },
   {
    title: 'Redux', 
    url: 'https://redux.js.org/', 
    author: 'Dan Abramov, Andrew Clark', 
    num_comments: 2, 
    points: 5, 
    objectID: 1
  }
]

// Explicit function declaration
function App() {
  return (
    <div>

      <Search />
      <hr />
      <List />

    </div>
  )
}

// Arrow function with concise body declaration without return statement
const List = () => (
  <ul>
    {list.map(
      (item) => (
        <li key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>
      ))}
  </ul>
  );

// Arrow function with block body (curly brace) declaration
const Search = () => {
  const handleChange = (event) => {
    // sythetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  }


  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
}

export default App;