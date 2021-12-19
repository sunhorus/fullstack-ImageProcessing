import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

//Test to check the image endpoint for successfull response 
describe('Test endpoint responses', () => {
    it('Test Process new Image', async (done) => {
        const response = await request.get('/api/v0/image?name=fjord&hight=100&width=100');
        expect(response.status).toBe(200);
        done();
    }
)});
