import React from "react";

import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";

export function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          {/* Componente da tela inicial */}
          <Route path="home" element={<Home />} />
          {/* Componente de uma rota específica */}
          <Route path="about" element={<About />} />
          {/* Componente para quando não encontrar uma rota */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
