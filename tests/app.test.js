const request = require('supertest');
const app = require('../app');

test('GET / should return ok: true', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
});
