import React, { Fragment } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface DisplayProps extends StarshipProps {
	winner?: boolean;
    loser?: boolean;
}

const DisplayStarship: React.FC<DisplayProps> = ({ starship, winner, loser }) => {
	const card = (
		<Fragment>
			<CardContent>
				<Typography variant="h5" component="div">
					{starship.name}
				</Typography>
				<Typography sx={{ mb: .5 }} color="text.secondary">
					{starship.stores_fighters ? 'Landing ship' : 'Fighter'}
				</Typography>
				<Typography variant="body2">
					Crew: <span className="ds-crew-value">{starship.crew_number}</span>
					<br />
					Laser guns: <span className="ds-guns-value">{starship.guns}</span>
				</Typography>
			</CardContent>
		</Fragment>
	);

	let bgColor = '#fff';
	if (winner) {
		bgColor = '#0f0';
	} else if (loser) {
		bgColor = '#f00';
	}

	return (
		<div className="display-starship">
			<Card
				variant="outlined"
				style={{backgroundColor: bgColor}}
			>
				{card}
			</Card>
		</div>
	);
};

export default DisplayStarship;
