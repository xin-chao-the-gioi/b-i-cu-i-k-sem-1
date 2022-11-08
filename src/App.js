import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import ProductDetails from './components/Pages/ProductDetails/ProductDetails';
import About from './components/Pages/About/About';
import Productlist from './components/Pages/ProductList/Productlist';
import Checkout from './components/Pages/Checkout/Checkout';
import Contact from './components/Pages/Contact/Contact';
import Masterlayout from './components/Layout/Masterlayout';
import Men from './components/Pages/Men/Men';
import Women from './components/Pages/Women/Women';
import Kids from './components/Pages/Kids/Kids';
import Detail from './components/Pages/Detail/Detail';
import Cart from './components/Pages/Cart/Cart';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Masterlayout children={<Home />} />}></Route>
        <Route
          path="/login"
          element={<Masterlayout children={<Login />} />}
        ></Route>
        <Route
          path="/register"
          element={<Masterlayout children={<Register />} />}
        ></Route>
        <Route
          path="/productdetails/:id"
          element={<Masterlayout children={<ProductDetails />} />}
        ></Route>
        <Route
          path="/about"
          element={<Masterlayout children={<About />} />}
        ></Route>
        <Route
          path="/men"
          element={<Masterlayout children={<Men />} />}
        ></Route>
        <Route
          path="/women"
          element={<Masterlayout children={<Women />} />}
        ></Route>
        <Route
          path="/kids"
          element={<Masterlayout children={<Kids />} />}
        ></Route>
        <Route
          path="/cart"
          element={<Masterlayout children={<Cart />} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={<Masterlayout children={<Detail />} />}
        ></Route>
        <Route
          path="/productlist"
          element={<Masterlayout children={<Productlist />} />}
        ></Route>
        <Route
          path="/checkout"
          element={<Masterlayout children={<Checkout />} />}
        ></Route>
        <Route
          path="/contact"
          element={<Masterlayout children={<Contact />} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
