/* eslint-disable react/prop-types */

// import * as React from 'react';

// Explicit function declaration
function App() {

  const stories = [ 
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

  return (
    <div>

      <Search />
      <hr />
      {/* JSX Comment: Passing stories variable for second level comp List as a attribute */}
      <List list={stories} />

    </div>
  )
}

// Arrow function with block body (curly brace) declaration
const List = (props) => {
  return (
    <ul>
    {props.list.map(
      (item) => (
        <Item key={item.objectID}  item={item} /> /* JS Comment: Passing item variable for 3rd comp Item*/
      ))}
  </ul>
  );
}

// JS oneline Comment: Explicit function declaration
// Direct argument use in 3rd comp Item withou
function Item(props) {
  return (
    <li>
      <span><a href={props.item.url}>{props.item.title}</a></span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>   
    </li>
  );
}



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