import { GifApi } from '../interface/GifApi';

export const getGifs = async (categorie: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${categorie}&limit=10`;

	const url1 = `https://api.giphy.com/v1/gifs/search?api_key=${
		import.meta.env.VITE_API_KEY
	}&q=${categorie}&limit=10`;

	const resp = await fetch(url);
	const { data }: GifApi = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};
