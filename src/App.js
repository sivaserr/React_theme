import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Greet name="text1" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="text2" heroName="superman">
       <button>Action</button>
      </Greet>
      <Greet name="text3" heroName="wonder woman"/>
      <Welcome name="text3" heroName="batman"></Welcome>
      <Welcome name="text4" heroName="batman"></Welcome>
      <Welcome name="text5" heroName="batman"></Welcome> */}

      {/* <Hello /> */}

             <Message />

    </div>
  );
}

export default App;
