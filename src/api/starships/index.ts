import { Router } from 'express'
import getStarship from './get_starship';

const router: Router = Router()

router.get('/get_starship', getStarship);

export default router
