import React from "react";
import "./App.css";
import Header from "./app/components/Header/Header";
import Banner from "./app/components/Banner/Banner";
import Home from "./app/components/Home/Home";
import Footer from "./app/components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
