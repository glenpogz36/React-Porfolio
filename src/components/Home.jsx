import React from 'react';

import background from '../../assests/img/bg.jpg'
function Home() {
    return (
        <div>
            <img src={background} alt="background" />
            <div class="home">
                <h1>Glen Sale</h1>
                <h2>Epicodus Student</h2>
            </div>
        </div>


    );
}

export default Home;