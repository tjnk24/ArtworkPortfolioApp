import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import Navbar from "../navbar";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contacts from "../../pages/contacts";
import Auth from '../../pages/auth';

import classes from './style';

const App = (props) => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className={classes.MainWrap}  >
                    { props.location.pathname!=='/auth' ? <Navbar/> : null }
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/auth" component={Auth} />
                        <Redirect to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default withRouter(App);
