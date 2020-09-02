import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SortingVisualizer from './containers/SortingVisualizer';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SortingVisualizer />
        </Route>
      </Switch>
    </Router>
  );
}
