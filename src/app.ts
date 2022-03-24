import express, { Express } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import mongoose from 'mongoose';
import cors from 'cors';
import starships from './api/starships';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(function (req, res, next) {
	res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval';");
	return next();
});
app.use('/api/starships', starships);

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
