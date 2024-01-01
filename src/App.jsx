import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Services from "./components/services/Services.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
