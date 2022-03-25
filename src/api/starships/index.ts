import { Router } from 'express';
import drawStarships from './draw_starships';
import getAllStarships from './get_all_starships';

const router: Router = Router();

router.get('/draw_starships', drawStarships);
router.get('/get_all_starships', getAllStarships);

export default router;
