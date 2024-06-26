import React from "react";
import Home from "./components/Home";
import SplitSection from "./components/SplitSection";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const App = ()=> {
  return (
    <div className="App">  
      <Home />
      <SplitSection/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
