import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../src/redux/reducers/index';
import { middleware } from '../src/redux/store';

export const storeFactory = (initialState) => {
	const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
	return createStoreWithMiddleWare(reducer, initialState);
};

export const findByTestAttribute = (wrapper, value) => {
	return wrapper.find(`[data-test='${value}']`);
};

export const checkProp = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
};
