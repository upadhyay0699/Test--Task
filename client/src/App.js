import React from 'react';
import Main from './Main';

import "./App.css";
import { BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import UserData from './User';

function App() {
  return (
    <div>
      <Router>
    <Routes>
      
     
    <Route path="/" element={<Main/>} />
    <Route path="/UserData" element={<UserData/>}/>
   

   
  </Routes>
  </Router>
    
    </div>
  );
}

export default App;