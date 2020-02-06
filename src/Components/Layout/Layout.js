import React from 'react';

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
        <Search />
        <Footer />
    </Hoc>
);

export default layout;
