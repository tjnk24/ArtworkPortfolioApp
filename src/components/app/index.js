import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import classes from './style.css';
import Navbar from "../navbar";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contacts from "../../pages/contacts";


function App() {
  return (

      <BrowserRouter>
          <div className={classes.MainWrap}>
              <Navbar/>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contacts" component={Contacts} />
              </Switch>

          </div>
      </BrowserRouter>

  );
}

export default App;
