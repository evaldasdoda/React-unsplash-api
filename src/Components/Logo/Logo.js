import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

import companyLogo from '../../Assets/img/logo.png';

// Styles
require('./Logo.scss');

const logo = props => {
    return (
        <div className="LOGO">
            <HashRouter>
                <NavLink to="/">
                    <img src={companyLogo} alt="Company logo" />
                </NavLink>
            </HashRouter>
        </div>
    );
};

export default logo;
