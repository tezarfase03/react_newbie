import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [myArray, setMyArray] = useState([]);
  function Onchangehandler() {
    setMyArray(prevArray => {
      const updatedArray = [...prevArray, firstName]; 
      console.log('Updated Array:', updatedArray);  
      return updatedArray;                           
    });
    setFirstName(''); 
  }
  
  return (
    <>
      <input
        value={firstName}
        onChange={ans => setFirstName(ans.target.value)}

      />
      <button onClick={Onchangehandler} >click</button>
    </>
  );

}

export default App
