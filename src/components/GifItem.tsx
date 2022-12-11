import { FC } from 'react';
import PropTypes from 'prop-types';

type ImageProps = {
	title: string;
	url: string;
};

const GifItem: FC<ImageProps> = ({ title, url }: ImageProps) => {
	return (
		<div className='card'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifItem;
