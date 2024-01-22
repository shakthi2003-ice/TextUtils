import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkMode] = useState("light")
  const setToggle = ()=>{
    if (darkmode==="dark") {
      setDarkMode("light")
      document.body.style.backgroundColor = 'white' ;
    }
    else{
      setDarkMode("dark")
      document.body.style.backgroundColor = '#212529'
    }
  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About"  mode={darkmode} toggleMode={setToggle}  />
        <div className="container">
          <TextForm title="Enter the Text below to analyse your characters" mode={darkmode} toggleMode={setToggle} />
        </div>
    </>
  );
}

export default App;
