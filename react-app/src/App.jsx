import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
 
  const students = ["Revathi", "Priya", "Riya", "Anu"];


  const name = "";


  const sortedStudents = [...students].sort();

  
  const filteredStudents = students.filter(
    (student) => student.startsWith("R")
  );

 
  const [count, setCount] = useState(0);

  
  function showMessage() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>React Concepts</h1>

      
      <h2>Name: {name ? name : "No Data Available"}</h2>

      <hr />

     
      <h2>Student List</h2>
      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      <hr />

    
      <h2>Sorted Students</h2>
      {sortedStudents.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      <hr />

      
      <h2>Filtered Students (Starts with R)</h2>
      {filteredStudents.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      <hr />

      
      <button onClick={showMessage}>Click Me</button>

      <hr />

      
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;