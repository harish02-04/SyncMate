import React from "react";
import Siginin from "./pages/signin";
import SDashboard from "./pages/sdashboard";
import ADashboard from "./pages/adashboard";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Routes>   <Route path="/" exact element={<Siginin/>} />
        <Route path="/sdash" element={<SDashboard/>} />
        <Route path="/adash" element={<ADashboard/>} /></Routes>
     
    </Router>
      
    </div>
  );
}

export default App;