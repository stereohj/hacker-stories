// import * as React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React'
};

const array = [0, 1, 2, 3, 4, 5];

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>{array.map((x) => x * 2 + ' ')}</h1>

      <label htmlFor='greeting'>Greeting: </label>
      <input type="text" id="greeting" placeholder='Type a greeting :)'/>

    </div>
  );
}

export default App;
