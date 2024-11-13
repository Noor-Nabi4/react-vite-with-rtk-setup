// src/routes/AppRouter.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
// import ProtectedRoute from "../components/ProtectedRoute";
// import Cart from "../components/Cart";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Products />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
