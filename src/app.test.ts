import request from 'supertest';
import app from './app';

describe('Server works', () => {
	it('Server works', async () => {
	    const response = await request(app.callback()).get('/');
	    expect(response.status).toBe(200);
	});
});
