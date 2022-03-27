import request from 'supertest';
import { IStarship } from '../../types';
import app from '../../app';

describe('API endpoints', () => {
	it('Draw starships', async () => {
	    const response = await request(app.callback()).get('/api/starships/draw_starships');
	    expect(response.status).toBe(200);
		expect(response.body.starships.length).toEqual(2);
	});

	it('Get Starships count', async () => {
		const response = await request(app.callback()).get('/api/starships/get_starships_count');
		expect(response.status).toBe(200);
		expect(response.body.starshipsCount).toEqual(5);
	});

	it('Get Starships Page 1', async () => {
		const response = await request(app.callback()).get('/api/starships/get_all_starships?page=1');
		expect(response.status).toBe(200);
		expect(response.body.starships.length).toEqual(4);
	});

	it('Get Starships Page 2', async () => {
		const response = await request(app.callback()).get('/api/starships/get_all_starships?page=2');
		expect(response.status).toBe(200);
		expect(response.body.starships.length).toEqual(1);
	});

	it('Get Starships Page 0', async () => {
		const response = await request(app.callback()).get('/api/starships/get_all_starships?page=0');
		expect(response.status).toBe(200);
		expect(response.body.starships.length).toEqual(4);
	});

	it('Get Starships Page 3', async () => {
		const response = await request(app.callback()).get('/api/starships/get_all_starships?page=3');
		expect(response.status).toBe(200);
		expect(response.body.starships.length).toEqual(0);
	});
});
