import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompoletedReducer, todosReducer} from 'reducers';

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompoletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
