import { Response, Request } from 'express';
import { MStarship } from '../../models';

const getStarshipsCount = async (req: Request, res: Response): Promise<void> => {
	try {
		const starshipsCount: number = await MStarship.count();
		res.status(200).json({ starshipsCount });
	} catch (error) {
		throw error;
	}
};

export default getStarshipsCount;
