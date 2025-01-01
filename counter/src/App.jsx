 import { useState } from 'react'
import './App.css'
import trashData from './data/data.js'
function App() {
  // counter is representing the initial value or state
  // setCount is the name of the method

  let [count, setCount] = useState(0);
  // method ke parameter mai hamesha ek counter dete hai
  const addValue = () => {
    setCount((prevCounter) => prevCounter+1);
    setCount((prevCounter) => prevCounter+1);
    setCount((prevCounter) => prevCounter+1);
    setCount((prevCounter) => prevCounter+1);
  }
  const [name , setName] = useState('Unknown');
  const [age , setAge] = useState(0);
  const personAge = (index) => {
    setAge(trashData[index].age);
  }
  const whoClicked = (name) => {
    setName(name);
  }
  const handleClick = (index, name) => {
    personAge(index);
    whoClicked(name);
  }
  return (
    <>
    <div>
        <h1>Hello Guys</h1>
        <button onClick={addValue}>Click me to add Values {count}</button>
        <br />
        <br />
        {/* ()=> handleClick is called a callback function*/}
        <button onClick={() => handleClick(0, 'Prankur')}>Prankur</button>
        <br />
        <br />
        <button onClick={() => handleClick(1, 'Shivangi')}>Shivangi</button>
        <br />
        <br />
        <h2>{name} is {age} years old</h2>
      </div>
    </>
  )
}

export default App
