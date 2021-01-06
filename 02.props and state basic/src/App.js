import React from 'react';

import './App.css';
import MessageCard from "./Componenets/MessageCard";
import DataCart from "./Componenets/DataCard";
import CountryCards from "./Componenets/CountryCards";
import CountryCard from "./Componenets/CountryCard";
import Employee from "./Componenets/Employee";
import School from "./Componenets/School";
import Navbar from "./Componenets/Navbar";
import Student from "./Componenets/Student";



function App() {
  return (
      <React.Fragment>
          <nav className="navbar navbar-dark btn-dark navbar-expand-sm">
              <a href="/" className="navbar-brand">React with Props </a>

          </nav>

       {/* <MessageCard name="suthan"  age="34" desgination="Software Engineer"/>
        <hr/>
        <MessageCard name="Rm"  age="34" desgination="Testing"/>*/}
        <Student/>
      </React.Fragment>
  );
}

export default App;
