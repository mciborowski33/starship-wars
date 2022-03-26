import { Context } from 'koa';
import { IStarship } from '../../types';
import { MStarship } from '../../models';

const drawStarships = async (ctx: Context): Promise<void> => {
	try {
		const starships: IStarship[] = await MStarship.aggregate([{ $sample: { size: 2 } }]);
		ctx.body = { starships };
	} catch (error) {
		throw error;
	}
};

export default drawStarships;
