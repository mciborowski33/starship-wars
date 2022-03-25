import { Response, Request } from 'express';
import { IStarship } from '../../types';
import { MStarship } from '../../models';

const PER_PAGE: number = 4;

const getAllStarships = async (req: Request, res: Response): Promise<void> => {
	const page: number = parseInt(req.query.page as string, 10) || 1;
	try {
		const starships: IStarship[] = await MStarship.find()
			.skip((page - 1) * PER_PAGE)
			.limit(PER_PAGE);
		res.status(200).json({ starships });
	} catch (error) {
		throw error;
	}
};

export default getAllStarships;
