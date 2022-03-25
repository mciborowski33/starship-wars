import React, { Fragment } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const DisplayStarship: React.FC<StarshipProps> = ({ starship }) => {
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
					Crew: {starship.crew_number}
					<br />
					Laser guns: {starship.guns}
				</Typography>
			</CardContent>
		</Fragment>
	);

	return (
		<div className="display-starship">
			<Card variant="outlined">
				{card}
			</Card>
		</div>
	);
};

export default DisplayStarship;
