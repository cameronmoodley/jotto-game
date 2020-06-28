import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import reducer from '../src/redux/reducers/index';

export const storeFactory = (initialState) => {
	return createStore(reducer, initialState);
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
