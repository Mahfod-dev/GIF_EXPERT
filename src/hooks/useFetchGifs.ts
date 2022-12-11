import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifImage } from '../interface/GifApi';

export const useFetchGifs = (categorie: string) => {
	const [images, setImages] = useState<GifImage[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		try {
			getGifs(categorie).then((newImages) => setImages(newImages));

			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return {
		images,
		loading,
	};
};
