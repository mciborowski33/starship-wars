import { Response, Request } from 'express';
import { IStarship } from '../../types';
import { MStarship } from '../../models';

const drawStarships = async (req: Request, res: Response): Promise<void> => {
	try {
		const starships: IStarship[] = await MStarship.aggregate([{ $sample: { size: 2 } }]);
		res.status(200).json({ starships });
	} catch (error) {
		throw error;
	}
};

export default drawStarships;
