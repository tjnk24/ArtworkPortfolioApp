import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    withRouter
} from 'react-router-dom';
import classes from './style';
import Navbar from "../navbar";
import Home from "../../pages/home";
import About from "../../pages/about";
import Contacts from "../../pages/contacts";
import Auth from '../../pages/auth';

function App(props) {

    useEffect(() => {
        // const checkScrollbar = setInterval(() => {

        //     const scrollHeight = Math.max(
        //         document.body.scrollHeight, document.documentElement.scrollHeight,
        //         document.body.offsetHeight, document.documentElement.offsetHeight,
        //         document.body.clientHeight, document.documentElement.clientHeight
        //     );

        //     if (document.body.clientHeight < scrollHeight) {
        //         document.body.setAttribute('style', 'margin-right: -10px;');
        //     } else {
        //         document.body.setAttribute('style', '');
        //     }
        // }, 100);
    }, []);

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
