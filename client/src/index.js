import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';

const App = () => {
  return (
    <StrictMode>
      <Router />
    </StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
