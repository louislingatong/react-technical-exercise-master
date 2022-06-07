// You should not need to make changes to this file to complete the initial tasks
// However it is important to understand how/why this works
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reducer, epic } from './notes/state';

const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
epicMiddleware.run(epic);

export default store;
