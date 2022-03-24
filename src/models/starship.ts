import { model, Schema } from 'mongoose';
import { IStarship } from '../types';

const starshipSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		crew_number: {
			type: Number,
			required: true,
		},

		guns: {
			type: Number,
			required: true,
		},

		stores_fighters: {
			type: Boolean,
			required: true,
		},
	},
	{
		timestamps: true
	}
);

export default model<IStarship>('Starship', starshipSchema);
