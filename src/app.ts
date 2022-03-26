import Koa from 'koa';
import apiRouter from './api';
import mongoose from 'mongoose';
import cors from '@koa/cors';

const app: Koa = new Koa();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(apiRouter.routes());

const uri: string = `mongodb://root:mongopass@localhost:27017/starships_wars?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;

mongoose
	.connect(uri)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		throw error;
	});
