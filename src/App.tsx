import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './Pages/Home';
import mAlpha2Page from './Pages/mAlpha2';

import './assets/styles/styles.scss';

function App() {
  return (
    <Router>
      <ul className={'demo'} style={{ display: 'none' }}>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/malpha2">mAlpha2 Page</Link>
        </li>
      </ul>

      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/malpha2" component={mAlpha2Page} />
      </Switch>
    </Router>
  );
}

export default App;
