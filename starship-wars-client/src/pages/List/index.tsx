import React, { useEffect, useState } from 'react';
import { DisplayStarship } from '../../components';
import { getAllStarships } from '../../API';

const ListPage: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([])

	useEffect(() => {
		listAllStarships()
	}, [])

	const listAllStarships = (): void => {
		getAllStarships()
			.then(({ data: { starships } }: IStarship[] | any) => {
				setStarships(starships);
			})
			.catch((err: Error) => console.log(err));
	};

	return (
		<div className="list-page">
			{starships.length > 0 && starships.map((item: IStarship) => (
				<DisplayStarship
					key={item._id}
					starship={item}
				/>
			))}
		</div>
	);
};

export default ListPage;
