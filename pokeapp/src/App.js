import "./App.css";
import { React } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import PagePokemon from "./pages/PagePokemon";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemon/:id" element={<PagePokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
