import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Navbar from '@components/navbar';
import Home from '@pages/home';
import About from '@pages/about';
import Contacts from '@pages/contacts';

import { GlobalStyles, MainWrap } from './style';

const App: FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <MainWrap>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Redirect to="/" />
        </Switch>
      </MainWrap>
    </BrowserRouter>
  </>
);

export default withRouter(App);
