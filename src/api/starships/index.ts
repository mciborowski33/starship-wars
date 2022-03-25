import { Router } from 'express'
import getAllStarships from './get_all_starships';

const router: Router = Router()

router.get('/get_all_starships', getAllStarships);

export default router
