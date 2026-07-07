import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const isLogin = true;

  return (
    <div>
      <h1>REACT - Conditional Rending</h1>

      {isLogin ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default App;