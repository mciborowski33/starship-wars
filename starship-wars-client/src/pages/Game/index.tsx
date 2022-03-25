import React, { useState } from 'react';
import { Button } from '@mui/material';
import './game-page.sass';

const GamePage: React.FC = () => {
	const [starships, setStarships] = useState<IStarship[]>([]);

	return (
		<div className="game-page">
			<div className="gp-topbar">
				<div className="gp-points">
					0
				</div>
				<div className="gp-settings">
					<Button>
						Play
					</Button>
				</div>
				<div className="gp-points">
					0
				</div>
			</div>
			<div className="gp-main">
				<div className="gp-player">
					t
				</div>
				<div className="gp-player">
					t
				</div>
			</div>
		</div>
	);
};

export default GamePage;
