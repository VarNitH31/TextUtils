import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
   const [alert,setAlert]=useState(null);
   const [mode,setMode]=useState('light');
   const[modeText,setModeText]=useState('Light mode')
   

   const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 
    1500);
   }


  const toggleMode=()=>{
    if (mode==='light') 
      {setMode('dark');
      setModeText('Dark mode')
      document.body.style.backgroundColor='rgb(3 29 55)'
      showAlert("Dark mode has been enabled", "success")
    }
    else
    {setMode('light');
    setModeText('Light mode');
    document.body.style.backgroundColor='#fff'
    showAlert("Light mode has been enabled", "success")
  
  }
}
  return (
  <>
      <Navbar title='E-commerce' mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert}/>
    <div className="container">
      <Textform heading="Enter the text to analyse" showAlert={showAlert} mode={mode}  />
    </div>

    {/* <div className="container">
      <About  mode={mode} />
    </div> */}
    
  </>
  );
}

export default App;