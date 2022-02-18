import React from "react";
import { Route, Routes } from "react-router";

import Home from "./screens/index"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
