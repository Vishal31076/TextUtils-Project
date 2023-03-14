import { useState } from "react";
import Alert from "./Component/Alert";
import Navbar from "./Component/Navbar";
import Teaxarea from "./Component/Teaxarea";
// import About from "./Component/About";

// import {
//   BrowserRouter as Router,
  
//   Route,

//   Routes
// } from "react-router-dom";


function App() {

  const [mode , setMode] = useState('light')  //1st
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{

    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }




  const toggleMode = () =>{
    if(mode  === 'light'){

      setMode('dark')
      document.body.style.backgroundColor = "#074436"
      showAlert("Dark mode has been enabled", "success")

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "#dee2e6"
      showAlert("Light mode has been enabled", "danger")


    }
  }

  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>         {/* //2nd */}
      <Alert Alert = {alert}/>

      {/* <div className="container my-3">

      <Routes>
          <Route path="/about" exact element={ <About />}></Route>
           
          <Route path="/" element={<Teaxarea showAlert={showAlert} heading = "Vishal's TextUtils" mode = {mode} />}>
             </Route>
             
             </Routes>
      </div>
      </Router> */}
     <div className="container my-3">
      
       <Teaxarea showAlert={showAlert} heading = "Vishal's TextUtils" mode = {mode} /> 
    </div>
    </>
  );
}

export default App;
