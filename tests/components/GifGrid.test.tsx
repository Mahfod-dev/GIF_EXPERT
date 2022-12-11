import React from 'react';
import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<
	typeof useFetchGifs
>;

describe('render GifGrid', () => {
	const category = 'One Punch';

	test('should render inital loading', () => {
		mockedUseFetchGifs.mockReturnValue({
			images: [],
			loading: false,
		});

		render(<GifGrid categorie={category} />);

		expect(screen.getByText(category));
	});

	test('should render images after loading useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: '123',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
		];

		mockedUseFetchGifs.mockReturnValue({
			images: gifs,
			loading: false,
		});

		render(<GifGrid categorie={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
