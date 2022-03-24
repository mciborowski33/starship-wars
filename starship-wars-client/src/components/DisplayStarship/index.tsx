import React from 'react';

const DisplayStarship: React.FC<StarshipProps> = ({ starship }) => {
	return (
		<div className="Card">
			<div className="Card--text">
				<h1>
					{starship.name}
				</h1>
			</div>
		</div>
	);
};

export default DisplayStarship;
