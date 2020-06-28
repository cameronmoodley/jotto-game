import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

export const middleware = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleware);

export default createStoreWithMiddleware(rootReducer);
