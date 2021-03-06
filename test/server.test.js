const { app } = require('../server/index.js');
const request = require('supertest');

xdescribe('SERVER SIDE', () => {
  test('should return a 200', async () => {
    let res = await request(app).get('/reviews/propId/5')
    expect(res.statusCode).toBe(200);
  })
  test('should return a 404', async () => {
    let res = await request(app).get('/reviews/propId/101')
      expect(res.statusCode).toBe(404);
  })
})