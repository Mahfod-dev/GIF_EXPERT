import { FC, ReactElement, useState } from 'react';
import Input from './components/Input';
import GifGrid from './components/GifGrid';

const GifExpert: FC = (): ReactElement => {
	const [categories, setCategories] = useState(['one punch', 'dragon ball']);

	const addCategory = (inputText: string) => {
		if (categories.includes(inputText)) return;

		setCategories([...categories, inputText]);
	};

	return (
		<>
			<h1>Gif Expert</h1>

			<Input addCategory={addCategory} />

			{categories.map((categorie: string, index) => {
				return <GifGrid key={index} categorie={categorie} />;
			})}
		</>
	);
};

export default GifExpert;
