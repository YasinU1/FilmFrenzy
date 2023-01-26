import React, { ReactElement } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films/Films";
import FilmDetails from "./pages/FilmDetails/FilmDetails";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Layout from "./components/Layout/Layout";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/films/:filmId" element={<FilmDetails />} />
          <Route path="/films" element={<Films />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
