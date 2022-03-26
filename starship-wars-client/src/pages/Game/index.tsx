import React, { useState, useEffect, useCallback } from 'react';
import { DisplayStarship } from '../../components';
import { drawStarships } from '../../API';
import { storageHelper } from '../../utils';
import Settings from './Settings';
import './game-page.sass';

const loadStorage = (): number[] => {
	try {
		return JSON.parse(storageHelper.getItem('scores') || '');
	} catch (error) {
		return [0, 0];
	}
};

const GamePage: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([]);
	const [winner, setWinner] = useState<number>(-1);
	const [scores, setScores] = useState<number[]>(loadStorage());
	const [method, setMethod] = useState<string>('crew_number');
	const [done, setDone] = useState<boolean>(true);

	const declareWinner = useCallback((win: number): void => {
		setWinner(win);
		if (win >= 0) {
			let newScores: number[] = [...scores];
			newScores[win] += 1;
			storageHelper.setItem('scores', JSON.stringify(newScores));
			setScores(newScores);
		}
	}, [scores]);

	useEffect(() => {
		if (starships.length === 2 && !done) {
			const shipStr1: number = +starships[0][method as keyof IStarship];
			const shipStr2: number = +starships[1][method as keyof IStarship];
			if (shipStr1 > shipStr2) {
				declareWinner(0);
			} else if (shipStr1 < shipStr2) {
				declareWinner(1);
			} else {
				declareWinner(-1);
			}
			setDone(true);
		}
	}, [starships, done, method, declareWinner]);

	const getStarships = (): void => {
		drawStarships()
			.then(({ data: { starships } }: IStarship[] | any) => {
				setStarships(starships);
				setDone(false);
			})
			.catch((err: Error) => console.log(err));
	};

	return (
		<div className="game-page">
			<div className="gp-topbar">
				<div className="gp-points">
					{scores[0]}
				</div>
				<Settings
					method={method}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setMethod((event.target as HTMLInputElement).value);
					}}
					onPlay={() => {
						getStarships();
					}}
				/>
				<div className="gp-points">
					{scores[1]}
				</div>
			</div>
			<div className="gp-main">
				<div className="gp-player">
					{starships.length === 2 && (
						<DisplayStarship
							key={starships[0]._id}
							starship={starships[0]}
							winner={winner === 0 ? true : false}
							loser={winner === 1 ? true : false}
						/>
					)}
				</div>
				<div className="gp-player">
					{starships.length === 2 && (
						<DisplayStarship
							key={starships[1]._id}
							starship={starships[1]}
							winner={winner === 1 ? true : false}
							loser={winner === 0 ? true : false}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default GamePage;
