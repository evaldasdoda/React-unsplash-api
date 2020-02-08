import React from 'react';

// Components

import Button from '../../UI/Button/Button';

// Styles
require('./Sidebar.scss');

const sideBar = props => {
    return (
        <aside className="SIDEBAR">
            <div className="SIDEBAR__buttons">
                <Button clicked={props.search} type="submit">
                    Search
                </Button>
                <Button clicked={props.search} type="submit">
                    Save
                </Button>
            </div>
            <div className="SIDEBAR__saved">
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

export default sideBar;
