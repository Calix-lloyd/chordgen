//import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import './components/NavBar'
import { NavBar } from './components/NavBar';
import {About} from './components/pages/About';
import {Login} from './components/pages/Login';
import {Register} from './components/pages/Register';
import { Home } from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/about' element ={<About></About>}/>
        <Route path='/login' element ={<Login></Login>}/>
        <Route path='/register' element ={<Register></Register>}/>
        <Route path='/' element = {<Home></Home>}/>
      </Routes>
      <div class = "footer_place">footer</div>
    </div>
  );
}

export default App;
