import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../../src/components/Input';

describe('render <Input/>', () => {
	test('should render input value', () => {
		render(<Input addCategory={() => {}} />);

		const input = screen.getByRole('textbox') as HTMLInputElement;

		fireEvent.input(input, { target: { value: 'Saitama' } });

		expect(input.value).toBe('Saitama');
	});

	test('should render addCategory inputValue', () => {
		const inputValue = 'Saitama';
		const addCategory = jest.fn();

		render(<Input addCategory={addCategory} />);

		const input = screen.getByRole('textbox') as HTMLInputElement;
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(addCategory).toHaveBeenCalled();
		expect(addCategory).toHaveBeenCalledWith(inputValue);
	});

	test('should not render addCategory if inputValue is empty', () => {
		const addCategory = jest.fn();

		render(<Input addCategory={addCategory} />);
		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(addCategory).toHaveBeenCalledTimes(0);
		expect(addCategory).not.toHaveBeenCalled();
	});
});
