import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Introduction from './Introduction';
import Aboutme from './Aboutme'


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Introduction} />
                <Route path='/aboutme' component={Aboutme} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;