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
        </aside>
    );
};

export default sideBar;
