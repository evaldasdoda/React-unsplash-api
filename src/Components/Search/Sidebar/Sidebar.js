import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

// Redux
import { removeSearch } from '../../../Actions/index';

// Styles
require('./Sidebar.scss');

class Sidebar extends React.Component {
    handleDelete(item) {
        const { removeSearch } = this.props;
        removeSearch(item);
    }
    render() {
        return (
            <div className="SIDEBAR" style={{ left: this.props.show ? '-10px' : '-100%' }}>
                <div className="SIDEBAR__saved">
                    Your saves searches
                    <ul>
                        {_.uniq(this.props.savedItems).map(item => (
                            <li key={item} onClick={() => this.props.trigger(item)}>{item} <span onClick={() => this.handleDelete(item)}>X</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    show: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        savedItems: state.search
    };
}


export default connect(mapStateToProps, { removeSearch })(Sidebar);
