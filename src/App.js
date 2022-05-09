import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './pages/Shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/LoginReg/Login/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path ="*" element={<NotFound/>}/>
      
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
