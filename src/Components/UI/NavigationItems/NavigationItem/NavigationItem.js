import React from 'react';

// Styles
require('../NavigationItems.scss');

const navigationItem = props => {
    return (
        <li className="NAVIGATION__item">
            <a href={props.link} className={props.active ? 'active' : null}>
                {props.children}
            </a>
        </li>
    );
};

export default navigationItem;
