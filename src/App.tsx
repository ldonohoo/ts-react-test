import React from 'react';
import './App.css';
import TextField from './TextField';
import Counter from './Counter';

const App: React.FC = () => {


  return (
    <div>
      <TextField  text='hello' 
                  person={{firstName: 'Bob', lastName: 'Henry'}}
                  handleChange={e => {
                    e.preventDefault();
                  }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>increment
            </button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App;
