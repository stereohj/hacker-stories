// import * as React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React'
};


const array = [0, 1, 2, 3, 4, 5];

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

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>{array.map((x) => x * 2 + ' ')}</h1>

      <label htmlFor='greeting'>Greeting: </label>
      <input type="text" id="greeting" placeholder='Type a greeting :)'/>

      <h2>{list.map((x) => x.title + " is written by " + x.author + ". ")}</h2>

    </div>
  );
}

export default App;
