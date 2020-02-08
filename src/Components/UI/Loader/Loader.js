import React from 'react';
import Loader from './loader.gif';

// Styles
require('./Loader.scss');

const loader = props => {
    return (
        <div className="LOADER">
            <img className="LOADER__img" src={Loader} alt="loader" />
        </div>
    );
};

export default loader;
