import React from 'react';
import './App.css';
import FormikSignUpForm from './components/SignUpForm';

function App() {
  return (
    <div className="App">
      <div className="card">
      <img alt="wallpaper"src="https://images.unsplash.com/photo-1571764592091-e852a14c8ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3934&q=80"/>

      <FormikSignUpForm/>
      </div>
      
    </div>
  );
}

export default App;
