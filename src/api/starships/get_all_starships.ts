import { Response, Request } from 'express';
import { IStarship } from '../../types';
import { MStarship } from '../../models';

const getAllStarships = async (req: Request, res: Response): Promise<void> => {
	try {
		const starships: IStarship[] = await MStarship.find();
		res.status(200).json({ starships });
	} catch (error) {
		throw error;
	}
};

export default getAllStarships;
