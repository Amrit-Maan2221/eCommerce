import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/register" element={user ? <Home /> : <Register />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
