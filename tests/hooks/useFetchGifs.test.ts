import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('render hooks useFetchGifs', () => {
	test('should render initial render', () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));

		const { images, loading } = result.current;

		expect(images.length).toBe(0);
		expect(loading).toBeFalsy();
	});

	test('should render an array of images and loading is true', async () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));

		await waitFor(() =>
			expect(result.current.images.length).toBeGreaterThan(0)
		);

		const { images, loading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(loading).toBeFalsy();
	});
});
