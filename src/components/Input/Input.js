import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
	render() {
		const content = this.props.success ? null : (
			<form className='form-inline'>
				<input
					data-test='input-box'
					name=''
					className='mb-2 mx-sm-3'
					type='text'
					placeholder='enter guess'
				/>
				<button
					data-test='submit-button'
					type='submit'
					className='btn btn-primary mb-2'
				>
					Click Me
				</button>
			</form>
		);

		return <div data-test='component-input'>{content}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		success: state.success,
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
