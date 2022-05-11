import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDesc from './pages/ProductDesc';
import CartPage from './pages/CartPage';
import Login from './pages/Login'
import Register from './pages/Register';
import UserPage from './pages/UserPage'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDesc />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
