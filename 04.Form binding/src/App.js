import React from 'react';
import MessageCard from "./Componenets/MessageCard";
import ProductItem from "./Componenets/ProductItem";
import Welcome from "./Componenets/Welcome";
import CarSector from "./Componenets/CarSelector";

import './App.css';
import CarSelector from "./Componenets/CarSelector";
import SmsApp from "./Componenets/SmsApp";
import Register from "./Componenets/Register";
import RegisterNew from "./Componenets/RegisterNew";
function App() {
  return (
      <React.Fragment>
          <nav className="navbar navbar-dark btn-dark navbar-expand-sm">
              <a href="/" className="navbar-brand"> React Js Form Binding  </a>

          </nav>

       {/* <ProductItem/>
        <hr/>
          <ProductItem/>

       <MessageCard name="suthan"  age="34" desgination="Software Engineer"/>
        <hr/>
        <MessageCard name="Rm"  age="34" desgination="Testing"/>

        <MessageCard/>

        <Welcome/>
        <CarSelector/>
        <SmsApp/>
        <Register/>*/}
        <RegisterNew/>
      </React.Fragment>
  );
}

export default App;
