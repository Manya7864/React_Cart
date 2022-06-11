import "./App.css";
import Navbar from "../src/Component/Navbar";
import Footer from "../src/Component/Footer";
import { Routes, Route } from "react-router-dom";
import Women from "../src/Pages/Women";
import Electronics from "../src/Pages/Electronic";
import Jewelery from "../src/Pages/Jewellary";
import Men from "../src/Pages/Men";
import Item from "../src/Pages/Item";
import Cart from "../src/Component/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/item" element={<Item />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;