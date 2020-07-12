import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import gameReducer from './reducer';
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const enhancersMiddlewares = applyMiddleware(...middlewares);
const store =  compose(enhancersMiddlewares)(createStore)(gameReducer)
sagaMiddleware.run(sagas);
export default store



