import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import MainCommunity from './Pages/MainCommunity.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Profiledit from './Pages/Profiledit.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login/>} />
          <Route path ="/App" element ={<App/>}/>
          <Route path ="/MainCommunity" element ={<MainCommunity/>}/>
          <Route path ="/Dashboard" element ={<Dashboard/>}/>
          <Route path ="/Profiledit" element ={<Profiledit/>}/>
          <Route path ="/MainCommunity" element ={<MainCommunity/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
)
