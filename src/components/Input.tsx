import { ChangeEventHandler, SyntheticEvent, useState } from 'react';
import PropTypes from 'prop-types';

type InputProps = {
	addCategory: (input: string) => void;
};

const Input = ({ addCategory }: InputProps) => {
	const [inputValue, setInputValue] = useState('');

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		if (inputValue.trim().length <= 1) return;

		addCategory(inputValue);

		setInputValue('');
	};

	const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
		setInputValue(target.value);
	};

	return (
		<>
			<form onSubmit={onSubmit} aria-label='form'>
				<input
					type='text'
					placeholder='search gif'
					value={inputValue}
					onChange={onInputChange}
				/>
			</form>
		</>
	);
};

Input.propTypes = {
	addCategory: PropTypes.func.isRequired,
};

export default Input;
