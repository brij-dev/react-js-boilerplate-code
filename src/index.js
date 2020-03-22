'use-strict'


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store'
import {BrowserRouter as Router} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';

import i18n from './common/i18n';
import { withNamespaces, NamespacesConsumer, Trans } from 'react-i18next';


ReactDOM.render(
  <I18nextProvider>
    <Provider store={store}>
      <Router>
        <App i18n={i18n}/>
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
