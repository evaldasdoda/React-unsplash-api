import React from 'react';

// Styles
require('./Input.scss');

const input = props => {
    return (
        <input
            type="props.type"
            name="props.name"
            className={'INPUT ' + props.class}
            onChange={props.onchange}
            placeholder={props.placeholder}
        />
    );
};

export default input;
