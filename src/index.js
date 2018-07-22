import './styles/normalize.css';
import './styles/icons.css';
import './styles/app.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';
import About from './components/About/About';
import Index from './components/Index/Index';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import NotFound from './components/NotFound/NotFound';

const routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <App>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
);

render(routes, document.getElementById('root'));

registerServiceWorker();
