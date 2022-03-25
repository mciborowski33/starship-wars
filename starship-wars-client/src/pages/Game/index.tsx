import React, { useState, useEffect } from 'react';
import {
	Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio,
} from '@mui/material';
import { DisplayStarship } from '../../components';
import { drawStarships } from '../../API';
import './game-page.sass';

const GamePage: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([]);
	const [winner, setWinner] = useState<number>(-1);
	const [method, setMethod] = useState<string>('crew_number');
	const [done, setDone] = useState<boolean>(true);

	useEffect(() => {
		if (starships.length === 2 && done) {
			const shipStr1: number = +starships[0][method as keyof IStarship];
			const shipStr2: number = +starships[1][method as keyof IStarship];
			if (shipStr1 > shipStr2) {
				setWinner(0);
			} else if (shipStr1 < shipStr2) {
				setWinner(1);
			} else {
				setWinner(-1);
			}
			setDone(true);
		}
	}, [starships, done, method]);

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
					0
				</div>
				<div className="gp-settings">
					<div className="gp-radiobtn">
						<FormControl>
							<FormLabel>Method of conflict</FormLabel>
							<RadioGroup
								value={method}
								onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
									setMethod((event.target as HTMLInputElement).value);
								}}
							>
								<FormControlLabel value="crew_number" control={<Radio />} label="Crew" />
								<FormControlLabel value="guns" control={<Radio />} label="Laser Guns" />
							</RadioGroup>
						</FormControl>
					</div>
					<Button
						onClick={() => {
							getStarships();
						}}
					>
						Play
					</Button>
				</div>
				<div className="gp-points">
					0
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
