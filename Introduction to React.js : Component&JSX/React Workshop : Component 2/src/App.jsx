import React from 'react'
import './App.css'
import StudentList

function App() {
  const studentList = [
    { name: "Tom", surname: "Cruise", age: 29 },
    { name: "Tom", surname: "Holland", age: 65 },
    { name: "Thomas", surname: "Adison", age: 68 },
    { name: "Willy", surname: "Allen", age: 35 },
  ];  

  return (
    <div className="App">
      <h2>This is React Application</h2>
      <p>Let's get started!</p>
      <StudentList/>
    </div>
  )
}

export default App
