// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// // import { getMovies, allFavorites } from './actions/index'
// import { BrowserRouter as Router, browserHistory, Route } from 'react-router-dom';
//
// import rootReducer from './reducers/index'
// import AppContainer from './containers/AppContainer';
//
//
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//
// const store = createStore(rootReducer, devTools, applyMiddleware(thunk));
//
// // store.dispatch(allFavorites())
// // store.dispatch(getMovies())
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={AppContainer}/>
//     </Router>
//   </Provider>
//   , document.getElementById('main')
// )
