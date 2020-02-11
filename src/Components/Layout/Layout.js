import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

// Components
import Hoc from '../../Hoc/Hoc';
import Menu from '../UI/Menu/Menu';
import Search from '../Search/Search';
import Footer from '../UI/Footer/Footer';

// Styles
require('./Layout.scss');

const layout = props => (
    <Hoc>
        <Menu />
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Search} />
            </Switch>
        </HashRouter>
        {/* <Search /> */}
        <Footer />
    </Hoc>
);

export default layout;
