import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import Home from "./Pages/Home";
import Solicitud from "./Pages/Solicitud";
import InicioSesion from "./Pages/InicioSesion";
import CategoriesX from "./Pages/Categories";
import RequestsX from "./Pages/Applicants/Requests";
import Employees from "./Pages/Employees/Employees";
import Associates from "./Pages/Associates/Associates";
import Events from "./Pages/Events/Events";
import Register from "./Pages/Register/Register";

function App() {

  return (
    
    <Router>
      <div>
  
        <Routes>
          <Route path="/solicitud" element={<Solicitud />} />
          <Route path="/inicioSesion" element={<InicioSesion />} />
          <Route path="/categories" element={<CategoriesX />} />
          <Route path="/requests" element={<RequestsX />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/associates" element={<Associates />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
