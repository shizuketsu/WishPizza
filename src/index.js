import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Menu from "./pages/menu";
import Location from "./pages/location";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/location" element={<Location />} />
            </Routes>
        </Router>
    </React.StrictMode>
);