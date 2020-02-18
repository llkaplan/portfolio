import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
         <Header />
        
        <Wrapper>
          <Route exact path="/" component={Index} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          </Wrapper>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
