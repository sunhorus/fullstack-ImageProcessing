import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Test main application route', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    // done();
  });
  // Test to check the image endpoint for successfull response
  it('Test Process new Image', async () => {
    const response = await request.get(
      '/api/v0/image?name=fjord&hight=100&width=100'
    );
    expect(response.status).toBe(200);
    // done();
  });
});
