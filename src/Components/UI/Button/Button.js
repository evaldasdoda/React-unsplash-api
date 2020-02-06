import React from 'react';

// Styles
require('./Button.scss');

const button = props => {
    return (
        <button className={'BUTTON ' + props.class} onClick={props.clicked} type={props.type}>
            {props.children}
        </button>
    );
};

export default button;
