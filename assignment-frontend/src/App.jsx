import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import Preview from "./Components/Preview";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
