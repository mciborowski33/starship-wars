import 'dotenv/config';
import Koa, { Context } from 'koa';
import apiRouter from './api';
import mongoose from 'mongoose';
import cors from '@koa/cors';

const app: Koa = new Koa();

const PORT: number = parseInt(process.env.PORT || '4000');

app.use(cors());
app.use(apiRouter.routes());

app.use(async (ctx: Context) => {
	ctx.body = 'OK';
});

const dbUrl: string = process.env.MONGO_URL || 'localhost';
const TESTING: boolean = process.env.TESTING === 'true' || false;

mongoose
	.connect(dbUrl)
	.then(() => {
		if (!TESTING) {
			app.listen(PORT, () => {
				console.log(`Server running on http://localhost:${PORT}`);
			});
		}
	})
	.catch((error) => {
		throw error;
	});

export default app;
