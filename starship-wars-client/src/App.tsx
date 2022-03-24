import React, { useEffect, useState } from 'react'
import { DisplayStarship } from './components'
import { getStarship } from './API'

const App: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([])

	useEffect(() => {
		fetchStarship()
	}, [])

	const fetchStarship = (): void => {
		getStarship()
			.then(({ data: { starships } }: IStarship[] | any) => {
				setStarships(starships);
			})
			.catch((err: Error) => console.log(err));
	};

	console.log(starships);

	return (
		<main className='App'>
			<h1>
				Starships
			</h1>
			{starships.length > 0 && starships.map((item: IStarship) => (
				<DisplayStarship
					key={item._id}
					starship={item}
				/>
			))}
		</main>
	)
}

export default App
