import 'styles/normalize.scss';
import 'styles/icons.css';
import 'styles/app.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from 'components/App/App';
import About from 'components/About/About';
import Index from 'components/Index/Index';
import ProjectDetail from 'components/ProjectDetail/ProjectDetail';
import NotFound from 'components/NotFound/NotFound';

const routes = (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0,0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="projects/:id" component={ProjectDetail} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
