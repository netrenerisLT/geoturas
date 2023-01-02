import React from "react";
import About from "./components/Layout/About";
import ContactForm from "./components/Layout/ContactForm";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Services from "./components/Layout/Services";
import ReactGA from "react-ga";

const TRACKING_ID = "G-KMQ31GBSQT"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
