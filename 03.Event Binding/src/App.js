import React from 'react';
import MessageCard from "./Componenets/MessageCard";
import ProductItem from "./Componenets/ProductItem";

import './App.css';
function App() {
  return (
      <React.Fragment>
          <nav className="navbar navbar-dark btn-dark navbar-expand-sm">
              <a href="/" className="navbar-brand"> ReactJS Event Binding </a>

          </nav>

        <ProductItem/>
        <hr/>
          <ProductItem/>

       <MessageCard name="suthan"  age="34" desgination="Software Engineer"/>
        <hr/>
        <MessageCard name="Rm"  age="34" desgination="Testing"/>

        <MessageCard/>
      </React.Fragment>
  );
}

export default App;
