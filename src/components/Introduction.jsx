import React from 'react';
import Introdetails from './Introdetails';

var masterIntroduction = [
    {
        names: 'Glen Sale',
        education: 'Junior Developer',
        details: 'Test.'
    },

];

function Introduction() {
    return (
        <div>
            <hr />
            {masterIntroduction.map((intro, index) =>
                <Introdetails names={intro.names}
                    education={intro.education}
                    details={intro.details}
                    key={index} />
            )}
        </div>
    );
}

export default Introduction;