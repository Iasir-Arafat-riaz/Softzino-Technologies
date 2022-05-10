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
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ContextApi from './ContextApi/ContextApi';
import DashboardDefault from './pages/Dashboard/DashboardDefault/DashboardDefault';
import UsersPage from './pages/Dashboard/UsersPage/UsersPage';
import Products from './pages/Dashboard/Products/Products';
import Register from './pages/LoginReg/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import UpdateProduct from './pages/Dashboard/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <ContextApi>
      <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
        <Route path="/dashboard" element={<DashboardDefault/>}/>
        <Route path="usersPage" element={<UsersPage/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="addNewProduct" element={<AddProduct/>}/>
        
      </Route>
      <Route path="/updateProduct/:idx" element={<UpdateProduct/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path ="*" element={<NotFound/>}/>
      
    </Routes>
<Footer/>
    </BrowserRouter>
      </ContextApi>
    
    </div>
  );
}

export default App;
