import React from "react";
import { Route, Routes } from "react-router";
import Defifarm from "./screens/Defifarm/Defifarm";
import FarmDetail from "./screens/FarmPage/FarmDetail";

import Home from "./screens/index"
import Markets from "./screens/Markets/Markets";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/markets" element={<Markets/>}/>
      <Route path="/defifarm" element={<Defifarm/>}/>
      <Route path="/defifarm/:id" element={<FarmDetail/>}/>
    </Routes>
  );
}

export default App;
