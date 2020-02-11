import React from 'react';

// Components
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

// Styles
require('./Menu.scss');

const menu = props => {
    return (
        <header className="MENU">
            <div className="MENU__container">
                <div className="MENU__container-logo">
                    <Logo />
                </div>
                <nav className="MENU__container-nav">
                    <NavigationItems />
                </nav>
            </div>
        </header>
    );
};

export default menu;
