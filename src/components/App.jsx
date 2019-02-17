import React from 'react';
import Header from './Header';
import Home from './Home';
import Aboutme from './Aboutme';
import ProjList from './Projectlist';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>

      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/proj' component={ProjList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;