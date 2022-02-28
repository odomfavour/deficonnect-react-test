import React from "react";
import { Route, Routes } from "react-router";

import Home from "./screens/index"
import Markets from "./screens/Markets/Markets";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/markets" element={<Markets/>}/>
    </Routes>
  );
}

export default App;
