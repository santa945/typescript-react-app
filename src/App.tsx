import React from 'react';
import './App.css';
import User from '../src/pages/users/Index'
// import {AppProvider} from '../src/context/AppContext'
import {Provider} from 'react-redux'
import Store from './store'
import TodoList from '../src/pages/todo/Index'


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <User></User> */}
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
