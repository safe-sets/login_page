const { app } = require('../server/server.js');
const request = require('request');

describe('GET / ', async () => {
  it('Should return a "Hello World" message', () => {
    const response = await request(app).get('/');
    expect(response.body).toEqual('Hello World!');
  });
})

describe('POST', async () => {
  it('Should receive a successful response upon post', () => {
    const response = await request(app.post('/login'));
    expect(response.status).toBe(200);
  })
})
