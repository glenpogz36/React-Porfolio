import React from 'react';
import PropTypes from 'prop-types';

function Introdetails(props) {
    return (
        <div>
            <h3>{props.education} - {props.names}</h3>
            <p><em>{props.details}</em></p>
            <hr />
        </div>
    );
}

Introdetails.propTypes = {
    names: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    details: PropTypes.string
};

export default Introdetails;