import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextFunc from './components/TextFunc';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light')  //Decides wether dark mode is enabled or no
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light Mode is enabled','success')
      document.title = 'ToolTips'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#373737'
      showAlert('dark Mode is enabled','success')
      document.title = 'ToolTips-Dark Mode'
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} toggleMode={toggleMode} title ="ToolTips"/>
    <Alerts alerts={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextFunc showAlert={showAlert} mode={mode} />} />
     </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

