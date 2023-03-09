import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import Cart from "./components/Cart";
import SIngleproduct from "./components/SIngleproduct";



function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/middle" element={<Home/>}></Route>
  <Route path="/navbar" element={<Navbar/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="/singleproduct" element={<SIngleproduct/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
