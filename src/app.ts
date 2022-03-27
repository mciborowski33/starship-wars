import 'dotenv/config';
import Koa from 'koa';
import apiRouter from './api';
import mongoose from 'mongoose';
import cors from '@koa/cors';

const app: Koa = new Koa();

const PORT: number = parseInt(process.env.PORT || '4000');

app.use(cors());
app.use(apiRouter.routes());

const dbUri: string = process.env.MONGO_URL || 'localhost';

mongoose
	.connect(dbUri)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		throw error;
	});
