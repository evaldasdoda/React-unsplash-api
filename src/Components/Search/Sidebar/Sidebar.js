import React from 'react';
import PropTypes from 'prop-types';

// Components

import Button from '../../UI/Button/Button';

// Styles
require('./Sidebar.scss');

const sidebar = props => {
    return (
        <div className="SIDEBAR" style={{ left: props.show ? '-10px' : '-100%' }}>
            <div className="SIDEBAR__saved">
                <ul>
                    <li>Saved #1</li>
                    <li>Saved #2</li>
                    <li>Saved #3</li>
                    <li>Saved #4</li>
                    <li>Saved #5</li>
                </ul>
            </div>
        </div>
    );
};

sidebar.propTypes = {
    show: PropTypes.bool
};

export default sidebar;
