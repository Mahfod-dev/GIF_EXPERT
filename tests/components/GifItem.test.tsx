import React from 'react';
import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('render <GifItem/>', () => {
	const title = 'Saitama';
	const url = 'https://one-punch.com/saitama.jpg';

	test('should render snapshot', () => {
		const { container } = render(<GifItem title={title} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('should render url into img', () => {
		render(<GifItem title={title} url={url} />);

		const { src, alt } = screen.getByRole('img') as HTMLImageElement;

		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should render title into GifItem', () => {
		render(<GifItem title={title} url={url} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
