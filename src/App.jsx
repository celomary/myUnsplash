import { useState } from 'react';
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import ProfileGuard from './components/ProfileGuard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Guards from './components/Guards';
import { isLoggedIn } from './services/auth/auth.services';
import SearchPage from './pages/SearchPage';


function App() {

  return <Router>
    <Routes>
          <Route path='/login' element={<Guards Component={Login} redirectRoute={"/profile"}  condition={!isLoggedIn()}/>} />
          <Route path='/register' element={<Guards Component={Register} redirectRoute={"/profile"}  condition={!isLoggedIn()}/>}/>
          <Route path='/profile' element={<ProfileGuard />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<Home />}/>
    </Routes>
  </Router>
}

export default App
