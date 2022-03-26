import { Context } from 'koa';
import { Response, Request } from 'express';
import { MStarship } from '../../models';

const getStarshipsCount = async (ctx: Context): Promise<void> => {
	try {
		const starshipsCount: number = await MStarship.count();
		ctx.body = { starshipsCount };
	} catch (error) {
		throw error;
	}
};

export default getStarshipsCount;
