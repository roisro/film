import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import 'semantic-ui-css/semantic.min.css'
import Routes from './Routes' 
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const stateFilm = {
  activeItems : 'home'
}

const reducerFilm = ( state  = stateFilm, action ) => {
  console.log("action nya => ", action) 
  switch(action.type){
    case "ACTIVE_ITEM":
      var stateActiveItems = {...state, activeItems : action.Activeitem}
      return stateActiveItems
    default :
        return state
  }
}

const store = createStore(reducerFilm)

ReactDOM.render(
    <Provider store={store}>
    <Routes />
    </Provider>,
  document.getElementById('root')
);

