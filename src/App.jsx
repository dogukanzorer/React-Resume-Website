import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
        <Route path="/diploma" element={<Portfolio/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
