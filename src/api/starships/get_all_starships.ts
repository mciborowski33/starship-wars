import { Context } from 'koa';
import { IStarship } from '../../types';
import { MStarship } from '../../models';

const PER_PAGE: number = 4;

const getAllStarships = async (ctx: Context): Promise<void> => {
	const page: number = parseInt(ctx.request.query.page as string, 10) || 1;
	try {
		const starships: IStarship[] = await MStarship.find()
			.skip((page - 1) * PER_PAGE)
			.limit(PER_PAGE);
		ctx.body = { starships };
	} catch (error) {
		throw error;
	}
};

export default getAllStarships;
