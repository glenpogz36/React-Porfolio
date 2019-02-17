import React from 'react';
import PropTypes from 'prop-types';

function Proj(props) {
    return (
        <div>
            <h3> {props.names}</h3>
            <p><em>{props.details}</em></p>
            <hr />
        </div>
    );
}

Proj.propTypes = {
    names: PropTypes.string.isRequired,
    details: PropTypes.string
};

export default Proj;