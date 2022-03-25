import { Router } from 'express';
import drawStarships from './draw_starships';
import getAllStarships from './get_all_starships';
import getStarshipsCount from './get_starships_count';

const router: Router = Router();

router.get('/draw_starships', drawStarships);
router.get('/get_all_starships', getAllStarships);
router.get('/get_starships_count', getStarshipsCount);

export default router;
