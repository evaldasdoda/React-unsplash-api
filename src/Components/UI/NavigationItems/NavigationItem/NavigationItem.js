import React from 'react';
import PropTypes from 'prop-types';

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

navigationItem.propTypes = {
    link: PropTypes.string,
    active: PropTypes.bool
};

export default navigationItem;
