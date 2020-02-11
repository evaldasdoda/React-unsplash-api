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
                    <div className="SIDEBAR__saved-container">
                        {_.uniq(this.props.savedItems).map(item => (
                            <div className="SIDEBAR__saved-container-item" key={item}>
                                <span className="item" onClick={() => this.props.trigger(item)}>
                                    {item}{' '}
                                </span>
                                <span className="delete" onClick={() => this.handleDelete(item)}>
                                    X
                                </span>
                            </div>
                        ))}
                    </div>
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
