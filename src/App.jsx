import * as React from 'react';

const welcome = {
  greeting: 'Hey',
  title: 'React'
};

function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor='greeting'>Greeting: </label>
      <input type="text" id="greeting" placeholder='Type a greeting :)'/>

    </div>
  );
}

export default App;
