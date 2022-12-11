import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';
import PropTypes from 'prop-types';

type CategorieProps = {
	categorie: string;
};



const GifGrid = ({ categorie }: CategorieProps) => {
	const { images, loading } = useFetchGifs(categorie);

	{
		loading && '....loading';
	}

	return (
		<>
			<>
				<h3>{categorie}</h3>
				<div className='card-grid'>
					{images.map((image) => (
						<GifItem key={image.id} {...image} />
					))}
				</div>
			</>
		</>
	);
};

GifGrid.propTypes = {
	categorie: PropTypes.string.isRequired,
};

export default GifGrid;
