import React from 'react';
import {
	Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio,
} from '@mui/material';
import './settings.sass';

type Props = {
	method: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onPlay: () => void
};

const Settings: React.FC<Props> = ({ method, onChange, onPlay }) => {
	return (
		<div className="settings">
			<div className="s-radiobtn">
				<FormControl>
					<FormLabel>Method of conflict</FormLabel>
					<RadioGroup
						value={method}
						onChange={onChange}
					>
						<FormControlLabel value="crew_number" control={<Radio />} label="Crew" />
						<FormControlLabel value="guns" control={<Radio />} label="Laser Guns" />
					</RadioGroup>
				</FormControl>
			</div>
			<Button
				onClick={onPlay}
			>
				Play
			</Button>
		</div>
	);
};

export default Settings;
