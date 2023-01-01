import React from "react";
import About from "./components/Layout/About";
import ContactForm from "./components/Layout/ContactForm";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Services from "./components/Layout/Services";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default App;
