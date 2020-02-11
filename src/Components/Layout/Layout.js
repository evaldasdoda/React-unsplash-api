import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

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
        <Footer />
    </Hoc>
);

export default layout;
