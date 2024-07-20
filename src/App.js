import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/manager/Login";
import AddDiamond from "./pages/manager/Add-diamond";
import Index from "./pages/manager/Index";
import Diamond from "./pages/manager/Diamond";
import EditDiamond from "./pages/manager/Edit-diamond";
import Accounts from "./pages/manager/Accounts";
import Accessory from "./pages/manager/Accessory";
import AddAccessory from "./pages/manager/Add-accessory";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAuthenticated') === 'true');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isLoggedIn);
  }, [isLoggedIn]);

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/index" element={<PrivateRoute><Index /></PrivateRoute>} />
        <Route path="/add-diamond" element={<PrivateRoute><AddDiamond /></PrivateRoute>} />
        <Route path="/add-accessory" element={<PrivateRoute><AddAccessory /></PrivateRoute>} />
        <Route path="/diamond" element={<PrivateRoute><Diamond /></PrivateRoute>} />
        <Route path="/accessory" element={<PrivateRoute><Accessory /></PrivateRoute>} />
        <Route path="/accounts" element={<PrivateRoute><Accounts /></PrivateRoute>} />
        <Route path="/edit-diamond" element={<PrivateRoute><EditDiamond /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/index" />} />
      </Routes>
    </Router>
  );
};

export default App;
