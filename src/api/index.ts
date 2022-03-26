import Router from '@koa/router';
import starships from './starships';

const router: Router = new Router({ prefix: '/api' });

router.use(starships.routes());

export default router;
