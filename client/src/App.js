import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from './components/Dashboard/Dashboard'
import Categories from './components/Categories/Categories'
import Product from './components/Product/Product'
import Users from './components/Users/Users'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        {/* User Manager */}
        <Route path="/Statistique" element={<Dashboard />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Users" element={<Users />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
