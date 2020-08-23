import React from 'react';
import './App.css';
import User from '../src/pages/users/Index'
import {AppProvider} from '../src/context/AppContext'

function App() {
  return (
    <AppProvider>

    <div className="App">
      <User></User>
    </div>
    </AppProvider>
  );
}

export default App;
