import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import classes from './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import ImgProfile from './pages/ImgProfile/ImgProfile';

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
              <ImgProfile/>
          </div>
      </BrowserRouter>

  );
}

export default App;
