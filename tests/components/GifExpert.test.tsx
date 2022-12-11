import React from 'react';
import { render, screen } from '@testing-library/react';
import GifExpert from '../../src/GifExpert';

describe('render <GifExpert/>', () => {
	test('should first', () => {
		render(<GifExpert />);
		screen.debug();
	});
});
