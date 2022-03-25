import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { DisplayStarship } from '../../components';
import { getAllStarships, getStarshipsCount } from '../../API';
import './list-page.sass';

const PER_PAGE: number = 4;

const ListPage: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([])
	const [starshipsCount, setStarshipsCount] = useState<number>(0);
	const [pageNumber, setPageNumber] = useState<number>(1);

	useEffect(() => {
		getStarshipsCount()
			.then(({ data: { starshipsCount } }: number | any) => {
				setStarshipsCount(starshipsCount);
			})
			.catch((err: Error) => console.log(err));
	}, [])

	useEffect(() => {
		listAllStarships(pageNumber);
	}, [pageNumber])

	const listAllStarships = (page: number): void => {
		getAllStarships(page)
			.then(({ data: { starships } }: IStarship[] | any) => {
				setStarships(starships);
			})
			.catch((err: Error) => console.log(err));
	};

	return (
		<div className="list-page">
			<div className="lp-topbar">
				<Button
					onClick={() => {
						if (pageNumber > 1) {
							setPageNumber(pageNumber - 1);
						}
					}}
				>
					Previous
				</Button>
				<div className="lp-pages">
					page {pageNumber}
				</div>
				<Button
					onClick={() => {
						if (pageNumber * PER_PAGE < starshipsCount) {
							setPageNumber(pageNumber + 1);
						}
					}}
				>
					Next
				</Button>
			</div>
			<div className="lp-list">
				{starships.length > 0 && starships.map((item: IStarship) => (
					<DisplayStarship
						key={item._id}
						starship={item}
					/>
				))}
			</div>
		</div>
	);
};

export default ListPage;
