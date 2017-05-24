import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk'
// import { getMovies, allFavorites } from './actions/index'
// import { Router, Route } from 'react-router'
import { venueData } from './complete-data/data-set';
import rootReducer from './reducers/index';
import AppContainer from './containers/AppContainer';
import { retrieveVenues } from './actions/index';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

store.dispatch(retrieveVenues(venueData));


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('main')
)
// <Provider store={store}>
// <Router >
// <Route path="/" component={AppContainer}/>
// </Router>
// </Provider>
