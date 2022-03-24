import { Document } from 'mongoose';

interface IStarship extends Document {
	name: string
	crew_number: number
	guns: number
	stores_fighters: boolean
};

export default IStarship;
