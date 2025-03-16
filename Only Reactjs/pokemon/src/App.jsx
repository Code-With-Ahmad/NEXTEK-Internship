import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import NoPageFound from "./pages/NoPageFound";
import NoPokemonFound from "./pages/NoPokemonFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*" element={<NoPageFound />} />
        <Route path="NoPokemon" element={<NoPokemonFound />} />
      </Routes>
    </>
  );
};

export default App;
