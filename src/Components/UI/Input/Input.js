import React from 'react';
import PropTypes from 'prop-types';

// Styles
require('./Input.scss');

const input = props => {
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            className={'INPUT ' + props.class}
            onChange={props.onchange}
            placeholder={props.placeholder}
        />
    );
};

input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onchange: PropTypes.func,
    placeholder: PropTypes.string
};

export default input;
