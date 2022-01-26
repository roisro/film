import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css'
import Routes from './Routes' 

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const sampel = {
  conto : 'Developer React JS POKONAMAH'
}

const reducerSampel = (state=sampel) => {
  return state
}

const store = createStore(reducerSampel)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

