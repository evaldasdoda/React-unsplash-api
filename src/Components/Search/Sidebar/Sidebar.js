import React from 'react';
import PropTypes from 'prop-types';

// Components

import Button from '../../UI/Button/Button';

// Styles
require('./Sidebar.scss');

const sidebar = props => {
    return (
        <aside className="SIDEBAR">
            <div className="SIDEBAR__buttons">
                <div className="SIDEBAR__buttons-search">
                    <Button clicked={props.search} type="submit">
                        Search
                    </Button>
                </div>
                <div className="SIDEBAR__buttons-save">
                    <Button clicked={props.search} type="submit">
                        Save
                    </Button>
                </div>
            </div>
            <div className="SIDEBAR__saved" style={{ left: props.show ? '0' : '-100%' }}>
                <ul>
                    <li>Saved #1</li>
                    <li>Saved #2</li>
                    <li>Saved #3</li>
                    <li>Saved #4</li>
                    <li>Saved #5</li>
                </ul>
            </div>
        </aside>
    );
};

sidebar.propTypes = {
    show: PropTypes.bool,
    search: PropTypes.func
};

export default sidebar;
